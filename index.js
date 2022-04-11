let main2 = document.querySelector('.main2');
//let input = document.querySelector('#input-value')
window.addEventListener('keydown', (e) => {
    console.log(e)

    main2.innerHTML = `
<div class="main">
<div class="keys">
     <span>Key</span>
    <p>${e.key == " " ? "space" : e.key}<p>
</div>
<div class="keys">
<span>Key Code</span>
<p>${e.keyCode}<p>
</div>

<div class="keys">
<span>Code</span>
<p>${e.code}<p>
</div>

</div>

`
})

