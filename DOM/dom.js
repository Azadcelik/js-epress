document.addEventListener('DOMContentLoaded', () => {
    // Code that uses the document object
    // console.dir(document) //it is gonna show all different properties and methods that attach to the document objects
    // console.log(typeof document)
    
    // console.log(document.domain);
    // console.log(document.URL);
    // console.log(document.doctype)
    // console.log(document.head)
    // console.log(document.body)
    // console.log(document.styleSheets)


    // console.log(document.title)
    // console.log(document.all[7][1])
    
    // console.log(document.forms)
    // console.log(document.links)

    // GETELEMENTBYID => select all tag with same id name
    // let firstText = document.getElementById('labelName')
    // firstText.textContent = "Mysurname"
    // console.log(firstText.innerText);
    // console.log(firstText.textContent);
    // console.log(firstText.innerHTML);
    // firstText.style.color = "red"

    //GETELEMENTBYCLASSNAME => selects all tag with same class name 
    // let list = document.getElementsByClassName('list-items');
    // list[1].textContent = "changed";
    // list[2].style.color = "blue"
    // list[0].style.backgroundColor = "yellow";
    // list[2].style.fontWeight = "bold";
    // console.log(list);
    // for (let i = 0; i < list.length; i++) { 
    //   list[i].style.color = 'red'
    // }


    //GETELEMENTBYTAGNAME => selects all tags no matter what class or id
    //  let list1 = document.getElementsByTagName('li');
    //  list1[1].textContent = "changed";
    //  list1[2].style.color = "black"
    //  list1[0].style.backgroundColor = "yellow";
    //  list1[2].style.fontWeight = "bold";


    //QUERYSELECTOR
    // //with semi colon you can select first-child, last-child and nth-child(2)
    // let secondList = document.querySelector("li:nth-child(2)");
    // console.log(secondList)
    // secondList.textContent = "this is changed by query selector second list"

    // // greater sign will get direct child
    // let firstList = document.querySelector("ul > li");
    // firstList.innerText = "changed by queryselector direct child element"

    // //space will catch any child does not matter nested or direct
    // let mysterious = document.querySelector("ul p");
    // console.log(mysterious.textContent)

    // let selectAll = document.querySelectorAll('li')
    
    // // selectAll.forEach((item)=> { 
    // //   item.style.color = 'purple'
    // // })

    // console.log(selectAll);
    // for (let i = 0; i < selectAll.length; i+=2) { 
    //   console.log(selectAll[i])
    //   selectAll[i].style.backgroundColor = "brown"
      
    // }





    //TRAVERSING DOM

    //parentNode => not suggested because of white space issue
    // let list3 = document.querySelector('#independent-li');
    // console.log(list.parentNode)
    // list.parentNode.style.backgroundColor = "pink";
    // console.log(list.parentNode.parentNode.parentNode.parentNode);

    //Parent ELement 
    // let list4 = document.querySelectorAll('.list-items');
    // console.log(list4)
    // console.log(list4.forEach(item => { 
    //   console.log(item.parentElement.parentElement)
    // }))


    //CHILD NODES => not suggested due to white space issue
    // let unorderedList = document.querySelector('ul');
    // console.log(unorderedList.childNodes)
  
    // let firstPara = document.querySelector('.first-paragraph');
    // console.log(firstPara.childNodes)


    //CHilDREN => without white space issue. more recommended but returning HTML Collection not nodeList
    // let unorderedList1 = document.querySelector('ul');
    // console.log(unorderedList1.children)
    // let firstPara1 = document.querySelector('.first-paragraph');
    // console.log(firstPara1.children)

    //firstChild => whitesopace issue
    // console.log(firstPara1.firstChild)

    //firwstElementChild => suggested
    // console.log(firstPara1.firstElementChild)

    //same for lastchild and lastElementChild 


    //same for nextSibling (notSuggested) but nextElementSibling(more suggested)
    //same for previousSibling which is not suggested but previousElementSibling which is sugges-
    //ted those differences are because of white space issues


});