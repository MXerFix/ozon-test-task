window.addEventListener("DOMContentLoaded", () => {
  const track_top = document.querySelector(".rotate-1");
  const track_bottom = document.querySelector(".rotate-2");
  const valueInput = document.querySelector(".progress-value_input");
  const back_bar = document.querySelector(".progress-bar");


  valueInput.value = 30
  let progress = valueInput.value;
  if (progress <= 50) {
    setTimeout(() => {track_bottom.style.transform = `rotate(${180 + (progress*3.6)}deg)`}, 300)
    track_top.style.transform = `rotate(${180}deg)`
  }
  if (progress > 50) {
    track_bottom.style.transform = `rotate(${360}deg)`
    setTimeout(() => {track_top.style.transform = `rotate(${180 + ((progress-50)*3.6)}deg)`}, 300)
  }
  

  valueInput.addEventListener("change", () => {
    let progress = valueInput.value;
    if (progress > 100) valueInput.value = 100
    if (progress <= 50) {
      setTimeout(() => {track_bottom.style.transform = `rotate(${180 + (progress*3.6)}deg)`}, 300)
      track_top.style.transform = `rotate(${180}deg)`
    }
    if (progress > 50) {
      track_bottom.style.transform = `rotate(${360}deg)`
      setTimeout(() => {track_top.style.transform = `rotate(${180 + ((progress-50)*3.6)}deg)`}, 300)
    }
  });

  document.querySelectorAll('.progress-tumbler_box').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active_tumbler')
      if (item.classList.contains('hide_tumbler')) {
        document.querySelector('.progress-bar_wrapper').classList.toggle('progress-bar_wrapper__hidden')
      }
      if (item.classList.contains('animate_tumbler')) {
        if (!item.classList.contains('animate-tumbler_active')) {
          console.log('added')
          item.classList.add('animate-tumbler_active')
          document.querySelectorAll('.rotates').forEach((item) => {
            item.classList.add('track-non_animated')
            setTimeout(() => {
              if (item.classList.contains('rotate-1')) {
                setTimeout(() => {
                  item.classList.remove('track-non_animated')
                }, 300);
              } else item.classList.remove('track-non_animated')
            }, 10);
          })
        }
        else if (item.classList.contains('animate-tumbler_active')) {
          item.classList.remove('animate-tumbler_active')
          console.log('deleted')
        }
      }
    })
  })
  

});


