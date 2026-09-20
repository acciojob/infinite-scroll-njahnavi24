//your code here!
let list = document.getElementById('infi-list')
const addItems = (count) => {
	for(let i = 0; i < count; i++){
		let li = document.createElement('li')
		li.textContent = "Item" + (list.children.length  + 1)
		list.appendChild(li)
	}
}
addItems(10)

list.addEventListener("scroll",()=>{
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		addItems(2)
	}
})