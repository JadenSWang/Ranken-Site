(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,A,t){"use strict";t.r(A);var a=t("feCj"),n=t("q1tI"),i=t.n(n),r=t("Wbzz"),c=t("Bl7J"),o=(t("tUrg"),t("EDJg")),l=function(e){var A=e.title,t=(e.color,e.textColor,e.to),a=e.label;e.link;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(r.Link,{to:t,style:{textDecoration:"none",fontSize:"15px"}},i.a.createElement(o.Card,{title:A,style:{width:"84vw",marginLeft:"8vw",marginTop:"2vh",textAlign:"center"}},i.a.createElement(r.Link,{to:t,style:{textDecoration:"none",color:"#1e6ed7"}},a))):i.a.createElement("a",{href:"http://www.mealage.com/m.jsp?id=8155"},i.a.createElement(o.Card,{title:A,style:{width:"84vw",marginLeft:"8vw",marginTop:"2vh",textAlign:"center"}},i.a.createElement(r.Link,{to:t,style:{textDecoration:"none",color:"#1e6ed7"}},a))))},d=t("vrFN"),f=t("b6Qr"),m=t("9eSz"),s=t.n(m);A.default=function(){var e,A,t=a.data,m=Object(n.useState)(""),b=m[0],g=m[1];Object(n.useEffect)((function(){fetch("https://cms.jadenswang.com/items/rnh_meta").then((function(e){return e.json()})).then((function(e){g(e.data.motd)}))}),[]);var p=i.a.createElement(f.MobileView,null,i.a.createElement(c.a,null,i.a.createElement(l,{title:b,body:"",to:"/",color:"#0F0F0F",textColor:"white"}),i.a.createElement(l,{title:"Dine In",subtitle:"Authentic ramen. Simmered to perfection.",body:"",to:"menu",color:"#0F0F0F",textColor:"white",label:"Menu"}),i.a.createElement(l,{title:"Carry Out",subtitle:"Zero fees. Skips the line. Saves time.",body:"",color:"white",link:"https://www.mealage.com/m.jsp?id=8155",textColor:"#050505",label:"Order Now"}),i.a.createElement(l,{title:"Locate",subtitle:"Find some Ramen Near You!",body:"",to:"locate",color:"#404040",textColor:"white",label:"Find some Ramen Near You!"})));return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:"Home"}),i.a.createElement(f.BrowserView,null,i.a.createElement(c.a,null,i.a.createElement(o.Row,{style:{width:"80%",marginTop:"5%"}},i.a.createElement(o.Col,{s:2}),i.a.createElement(o.Col,{s:4},i.a.createElement(o.Card,{actions:[i.a.createElement(r.Link,{to:"/menu",activeStyle:{color:"#ff9900"}},"Menu")],header:i.a.createElement(s.a,{fluid:t.front_menu_image.childImageSharp.fluid})})),i.a.createElement(o.Col,{s:4},i.a.createElement("div",{style:{height:"50%",marginTop:"20%",paddingTop:150,paddingBottom:200,width:"100%"}},i.a.createElement("div",{style:{fontFamily:"calibri",fontSize:"2em",width:"88%",marginLeft:"6%",marginBottom:50}},"Authentic Japenese Cuisine you'll fall in love with."),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"col"}},i.a.createElement(o.Button,{onClick:function(){window.location.href="https://www.mealage.com/m.jsp?id=8155"},style:(e={borderWidth:10,textAlign:"center"},e.borderWidth=10,e.width=200,e.backgroundColor="orange",e.marginRight=20,e)},"CARRY OUT"),i.a.createElement(o.Button,{href:"",style:(A={borderWidth:10,textAlign:"center",backgroundColor:"orange"},A.borderWidth=10,A.width=200,A)},"DELIVER (unavailable)")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"col",marginTop:40}},i.a.createElement("div",{style:{fontFamily:"calibri",fontSize:"1.2em",marginLeft:"6%",textAlign:"center"}},"Chef Li's Message: \"",b,'"')))),i.a.createElement(o.Col,{s:2})))),p)}},feCj:function(e){e.exports=JSON.parse('{"data":{"front_menu_image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,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","aspectRatio":0.7396449704142012,"src":"/static/a1f7d0071f8fb666898cad2c2485645e/3648b/main_page.png","srcSet":"/static/a1f7d0071f8fb666898cad2c2485645e/e1953/main_page.png 250w,\\n/static/a1f7d0071f8fb666898cad2c2485645e/46604/main_page.png 500w,\\n/static/a1f7d0071f8fb666898cad2c2485645e/3648b/main_page.png 598w","sizes":"(max-width: 598px) 100vw, 598px"}}},"front_map":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMFAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHUlXxmu4J1AD//xAAdEAACAgEFAAAAAAAAAAAAAAABAwACEhARISIy/9oACAEBAAEFAnG+Za3GM3tfuBzB70//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAABAwQDAAAAAAAAAAAAAAABAhARAAMhMRIyQf/aAAgBAQAGPwK2EemgeA7RtklEYndDCYVcnBYv/8QAHhABAAIBBAMAAAAAAAAAAAAAAQARIRAxUXFhsfD/2gAIAQEAAT8hMnSl31KVr9muNKUJkVOwY+fEMMgPcBCjGNttP//aAAwDAQACAAMAAAAQUwg8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHxABAAICAgIDAAAAAAAAAAAAAREhAFExQRBxgaGx/9oACAEBAAE/EAupZIEHTTVz8YxcYV57tOcMBMKBUVCxuONYXpuIzPVm0r9Y0HvgJPzJhBPrKhCNHHrx/9k=","aspectRatio":1.1363636363636365,"src":"/static/0466f1744a2d8eaf1424061abd8bbb67/9dc27/ranken_map.jpg","srcSet":"/static/0466f1744a2d8eaf1424061abd8bbb67/25b50/ranken_map.jpg 75w,\\n/static/0466f1744a2d8eaf1424061abd8bbb67/aabdf/ranken_map.jpg 150w,\\n/static/0466f1744a2d8eaf1424061abd8bbb67/9dc27/ranken_map.jpg 300w,\\n/static/0466f1744a2d8eaf1424061abd8bbb67/32fd5/ranken_map.jpg 450w,\\n/static/0466f1744a2d8eaf1424061abd8bbb67/4fe8c/ranken_map.jpg 600w,\\n/static/0466f1744a2d8eaf1424061abd8bbb67/e3470/ranken_map.jpg 628w","sizes":"(max-width: 300px) 100vw, 300px"}}},"under_construction":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADgElEQVQ4y42Ta0xUVxCAzz2Pe+5lFxd5LLBCF0WgK+gC3WV33TSAj3bT6Io2ZZOi8bWlFKGhEaRSAwtafCFobAI2YNMfFZpUjSWtFE21Nmkkmhij0cRo/FGD/UGThpLYso/pPZfVGP1RJ5kzM7lnvjN35hyEXpAVKypQoDQBHfvqtB5XB1vI+Pi4DQCwiPeHdkvCtnxci+yLM9D/yubVBbptb22iwnbs+XTryPAw7G5tbn66Z9v7G3Tom2XLUO5rmS9DZibKEQwg5HIfQgAaLOjRE+pq3jG3NWz079sbsh/r6bb3HejY0FKTycU3T3E6PdfNCVxmZE3FHPTs/nla6TUmPYAZG7LnMVKSS/XKzIlmvtHn8Dx/8PVr1xK95dVOhJz4xaIAyp8L/lr2UtVHP3LkXTrsTEAoDQNYTY/HstNKFyHL1Og890+9yTtchQnVF44oH8Ijtg7gcRxqQSgUnB8PeqSyQmV7zVty//1vDCPfdiiXHDb58tSYfPvRKP19oYVOB1az8JOLOLJnE4ZEA4Mzexmc7qJQ6TC8LRjBtSpBteuMevmHG5IcRpVAnZ/A0C4MWWkS5GRiaAxgyM2WQJxZtpRASQEWfoxgFNUa/QQhCZYvVRoEI1HFGrDKKMWBRQZF+ldzw5rOahrxrySR3hCPftnHo7/+yGPfDamxsyeUmADGVewFT5HcFe8URmu8Bh041GZOyUgm02LD0wRXMYaedhl2NsrQ3MTgXT+DgJ9CSpIEJqMUy0rDYUuqBCX58uAzoM+t6t6d4Sx1kYU8dC/B4PfSaO16Ck2bGWwJyNDZJkN3pwL9PRxOHOAw2Mljv/QrsZsn1chIBwNrBhuNAyX0gd8YH8ouXJxHrw7slLVGq+ErA3L0wqASba3n0aY6Ft33GY+EmlmkysfC9gIa9rnJbGk+/ceh9dRpY7eeXY+htuQ5siaLs+h5zhDYrDhSmqc3H5YslKD+PQwpprnBHKzH0L6FgBjG50EJbg4SqF+vToj8qVPa8scP2cInYnk9h7f7vQTCF/HswTo6U5hD/pwew5N3R9i9nAXyxKEd7DxM0lN9jfyLtV7eBQ/oJ3e+VrZXOpOsIr/yDVWa+90bC3T7928uAtcTlsMN1VNVMT8frqZmAphV9AqSnmqMP6eT6br9vtf6KnkIJpFUXoTE3SXwM6JXjnNavcqkV+ZzcfQfiNg3BBhL1i8AAAAASUVORK5CYII=","aspectRatio":1.3392857142857142,"src":"/static/59642836f4881944df9ac77a2b33661b/630fb/under_construction.png","srcSet":"/static/59642836f4881944df9ac77a2b33661b/5db04/under_construction.png 75w,\\n/static/59642836f4881944df9ac77a2b33661b/6d161/under_construction.png 150w,\\n/static/59642836f4881944df9ac77a2b33661b/630fb/under_construction.png 300w,\\n/static/59642836f4881944df9ac77a2b33661b/62b1f/under_construction.png 450w,\\n/static/59642836f4881944df9ac77a2b33661b/2a4de/under_construction.png 600w,\\n/static/59642836f4881944df9ac77a2b33661b/3a34b/under_construction.png 1249w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},tUrg:function(e,A,t){"use strict";t("OGtf")("link",(function(e){return function(A){return e(this,"a","href",A)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-111fbc45740bbdd83cf8.js.map