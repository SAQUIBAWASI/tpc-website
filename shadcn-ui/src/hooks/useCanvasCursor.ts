'use client';
import { useEffect } from 'react';

const useCanvasCursor = () => {
  useEffect(() => {
    let ctx: CanvasRenderingContext2D | null;
    let f: any;
    let lines: any[] = [];
    let pos: any = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const E = {
      friction: 0.5,
      trails: 20,
      size: 20,
      dampening: 0.25,
      tension: 0.98,
    };

    function Node() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    function Oscillator(this: any, e: any) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    }
    Oscillator.prototype.update = function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    };

    function Line(this: any, e: any) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let i = 0; i < E.size; i++) {
        const t = new (Node as any)();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    }
    Line.prototype.update = function () {
      let e = this.spring;
      let t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;

      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          let prev = this.nodes[i - 1];
          t.vx += (prev.x - t.x) * e;
          t.vy += (prev.y - t.y) * e;
          t.vx += prev.vx * E.dampening;
          t.vy += prev.vy * E.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= E.tension;
      }
    };
    Line.prototype.draw = function () {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
      for (let i = 1; i < this.nodes.length - 2; i++) {
        let c = this.nodes[i];
        let d = this.nodes[i + 1];
        let x = 0.5 * (c.x + d.x);
        let y = 0.5 * (c.y + d.y);
        ctx.quadraticCurveTo(c.x, c.y, x, y);
      }
      ctx.stroke();
      ctx.closePath();
    };

    function onMousemove(e: MouseEvent | TouchEvent) {
      if (e instanceof TouchEvent && e.touches.length > 0) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else if (e instanceof MouseEvent) {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    }

    function render() {
      if (!ctx) return;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.5)`;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].draw();
      }
      requestAnimationFrame(render);
    }

    function resizeCanvas() {
      if (!ctx) return;
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }

    function init() {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      if (!canvas) return;
      ctx = canvas.getContext('2d');
      if (!ctx) return;

      f = new (Oscillator as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 200,
      });

      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new (Line as any)({ spring: 0.45 + (i / E.trails) * 0.025 }));
      }

      resizeCanvas();
      render();
    }

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('touchmove', onMousemove);
    window.addEventListener('resize', resizeCanvas);

    init();

    return () => {
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchmove', onMousemove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
