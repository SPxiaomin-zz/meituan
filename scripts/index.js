window.onload = function() {
  var inputNEle = document.querySelector('#input_n');
  var nthMaxValue = document.querySelector('#nth_max_value');

  document.querySelector('#input_finish').onclick= function() {
    var inputN = inputNEle.value.trim();

    // 当输入为空时，提示出错
    if (!inputN) {
      inputNEle.style.borderColor = 'red';
      nthMaxValue.innerHTML = '输入不能为空!';

      return;
    }

    var nthMax = findNthMax(inputN);
    if (nthMax === -1) {
      // 当输入格式有误时，提示出错
      inputNEle.style.borderColor = 'red';
      nthMaxValue.innerHTML = '输入有误，请重新输入!'
    } else {
      // 当输入格式无误，求出正确结果并显示
      inputNEle.style.borderColor = '';
      nthMaxValue.innerHTML = nthMax;
    }

  };
};
