function goToPrevSlide(prevState, props) {
  const currentIndex =
    prevState.currentIndex == 0
      ? props.slides.length - 1
      : prevState.currentIndex - 1;

  return { currentIndex };
}

function goToNextSlide(prevState, props) {
  const currentIndex =
    prevState.currentIndex == props.slides.length - 1
      ? 0
      : prevState.currentIndex + 1;

  return { currentIndex };
}


export { goToPrevSlide, goToNextSlide };
