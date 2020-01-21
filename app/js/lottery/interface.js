import $ from 'jquery';
class Interface {
  getOmit(issue) { //获取遗漏
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOmit(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    });
  }

  getOpenCode(issue) { //获取中奖号码
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    });
  }

  getState(issue) { //获取彩票期数
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    });
  }
}

export default Interface