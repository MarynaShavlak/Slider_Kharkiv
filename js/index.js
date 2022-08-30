const slider = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPreviousBtn: document.getElementById('show-prev-btn'),
  showNextBtn: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-img'),

  start: function () {
    let that = this;
    this.showPreviousBtn.addEventListener('click', function (event) {
      that.onShowPreviousBtnClick(event);
    });
    this.showNextBtn.addEventListener('click', function (event) {
      that.onShowNextBtnClick(event);
    });

    this.imagesUrls.push('css/2.jpg');
    this.imagesUrls.push('css/3.jpg');
    this.imagesUrls.push('css/4.jpg');
    this.imagesUrls.push('css/5.jpg');
    this.imagesUrls.push('css/6.jpg');
    this.imagesUrls.push('css/7.jpg');
    this.imagesUrls.push('css/8.jpg');
    this.imagesUrls.push('css/9.jpg');
    this.imagesUrls.push('css/10.jpg');
    this.imagesUrls.push('css/11.jpg');
    this.imagesUrls.push('css/12.jpg');
    this.imagesUrls.push('css/13.jpg');
    this.imagesUrls.push('css/14.jpg');
    this.imagesUrls.push('css/15.jpg');
    this.imagesUrls.push('css/16.jpg');

    
      
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPreviousBtn.disabled = true;
  },

  onShowPreviousBtnClick: function (e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;
    if (this.currentImageIndex === 0) {
      this.showPreviousBtn.disabled = true;
    }
  },
  onShowNextBtnClick: function (e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPreviousBtn.disabled = false;
    if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
      this.showNextBtn.disabled = true;
    }
  },
}


slider.start();