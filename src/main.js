const div = dom.create("<div>aaa</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create("<div id='parent'></div>");
dom.wrap(test, div3)

dom.empty(empty)

dom.attr(test, "title", "hi")

dom.text(test, "hihihihihi")

dom.style(test, { border: '1px solid red', color: 'blue' })

dom.class.add(test, 'red')
dom.class.remove(test, 'red')

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(dom.find('#t2')[0]));