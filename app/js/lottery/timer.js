class Timer {
  countdown(end, update, handle) {
    const now = new Date().getTime();
    const self = this;

    if (end - now) {
      handle.call(self);
    } else {
      let lastTime = end - now;
      const px_d = 1000 * 60 * 60 * 24;
      const px_h = 1000 * 60 * 60;
      const px_m = 1000 * 60;
      const px_s = 1000;
      let d = Math.floor(lastTime / px_d);
      let h = Math.floor(lastTime - d * px_d / px_h);
      let m = Math.floor(lastTime - d * px_d - h * px_h / px_m);
      let s = Math.floor(lastTime - d * px_d - m * px_m / px_s);
      let result = [];
      if (d > 0) {
        result.push(`<em>${d}</em>天`);
      }
      if (h > 0) {
        result.push(`<em>${h}</em>时`);
      }
      if (m > 0) {
        result.push(`<em>${m}</em>分`);
      }
      if (s > 0) {
        result.push(`<em>${s}</em>秒`);
      }

      self.lastTime = result.join('');
      update.call(self, r.join(''));
      setTimeout(() => {
        self.countdown(end, update, handle);
      }, 1000);
    }
  }
}

export default Timer