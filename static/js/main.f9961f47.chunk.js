(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o);var l=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex w-screen border-b border-gray-200 top-0 z-100 h-16 items-center"},e.image&&r.a.createElement("img",{className:"h-12 ml-5",src:e.image,alt:""}),r.a.createElement("div",{className:"text-lg ml-5 "},e.title)),r.a.createElement("div",{className:"w-screen h-16"}))},i=a(89),c=a(12),m=a(162),h=a(163),d=a(59),u=a(158),f=function(e){var t=e.title,a=e.body,n=e.link,o=e.score,s=e.long_body,l=r.a.useState(!1),i=Object(c.a)(l,2),f=i[0],g=i[1],y=r.a.useState(!1),b=Object(c.a)(y,2),p=b[0],v=b[1];return r.a.createElement(m.a,{gutter:16,style:{marginTop:"10px",marginBottom:"10px"}},r.a.createElement(h.a,{span:16,offset:4},r.a.createElement(m.a,{className:"".concat(p?"border-solid border-blue-300 shadow ":"border-solid "," border rounded-lg"),onClick:function(){return g(!f)},onMouseOver:function(){return v(!0)},onMouseLeave:function(){return v(!1)}},r.a.createElement(h.a,{span:18},r.a.createElement("div",{className:"rounded-lg"},r.a.createElement("div",{className:"px-6 py-4 text-left"},r.a.createElement(m.a,null,r.a.createElement(h.a,{span:18},r.a.createElement("div",{className:"font-bold text-xl text-left"},t)),r.a.createElement(h.a,{span:6},r.a.createElement("div",{className:"text-right"},r.a.createElement(d.a,{type:"link"},f?"Less":"More")))),r.a.createElement(u.a,null),r.a.createElement("div",{className:!0,"text-base":!0},r.a.createElement("i",null,a)),r.a.createElement("br",null),r.a.createElement("div",null,f?s:null),r.a.createElement("div",null,n)))),r.a.createElement(h.a,{span:1},r.a.createElement("div",{className:"flex items-center h-full"},r.a.createElement(u.a,{type:"vertical",style:{height:"90%"}}))),r.a.createElement(h.a,{span:5,className:"flex items-center justify-center"},r.a.createElement("div",{className:" text-2xl font-bold "},o)))))},g=a(159),y=a(160),b=function(e,t){var a=(e.brewingEase*t.brewingEase+e.flavor*t.flavor+e.cost*t.cost)/(e.brewingEase+e.flavor+e.cost);return a=(Math.round(100*a)/100).toFixed(2)},p=function(e){var t=parseInt(e);return isNaN(t)?0:t},v=function(e){var t=e.posts,a=Object(n.useState)(5),o=Object(c.a)(a,2),s=o[0],l=o[1],d=Object(n.useState)(5),u=Object(c.a)(d,2),v=u[0],E=u[1],w=Object(n.useState)(5),x=Object(c.a)(w,2),T=x[0],k=x[1],S=Object(n.useState)(t),j=Object(c.a)(S,2),A=j[0],z=j[1];return Object(n.useEffect)((function(){console.log({brewingEase:s,flavor:v,cost:T});var e=Object(i.a)(A);e.sort((function(e,t){return b({brewingEase:s,flavor:v,cost:T},t.scores)-b({brewingEase:s,flavor:v,cost:T},e.scores)})),z(e)}),[s,v,T]),r.a.createElement("div",null,r.a.createElement(m.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(h.a,{style:{textAlign:"center",marginBottom:"50px"}},r.a.createElement(g.a,{align:"center",size:"large"},r.a.createElement(y.a,{size:"large",addonBefore:"Brewing Ease",suffix:"/ ".concat(s+v+T),id:"brewingEase",value:s,placeholder:"brewingEase",onChange:function(e){return l(p(e.target.value))}}),r.a.createElement(y.a,{size:"large",addonBefore:"Flavor",suffix:"/ ".concat(s+v+T),id:"flavor",value:v,placeholder:"flavor",onChange:function(e){return E(p(e.target.value))}}),r.a.createElement(y.a,{size:"large",addonBefore:"Cost",suffix:"/ ".concat(s+v+T),id:"cost",value:T,placeholder:"cost",onChange:function(e){return k(p(e.target.value))}})))),A.map((function(e){return r.a.createElement(f,{title:e.title,body:e.body,long_body:e.long_body,link:e.link,score:b({brewingEase:s,flavor:v,cost:T},e.scores)})})))},E=a(161),w=a(88);var x=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center text-lg p-10"},r.a.createElement(m.a,{gutter:16},r.a.createElement(h.a,{span:8,offset:4},r.a.createElement("p",{className:"text-left"},r.a.createElement("b",null,"React-Teave")," is a tea ranker, based on my perception of how good a tea is in various categories, and how much you value each category."),r.a.createElement("br",null),r.a.createElement("p",{className:"text-left"},"Results are organised by weights that ",r.a.createElement("b",null,"you")," assign below, multiplied by the scores I have graded each tea by."),r.a.createElement("br",null),r.a.createElement("p",{className:"text-left"},"This is a completely subjective experience.")),r.a.createElement(h.a,{span:8},r.a.createElement(m.a,{justify:"center"},r.a.createElement("span",null,r.a.createElement("h2",{className:"text-center"},"Rank of Each Category"))),r.a.createElement(u.a,null),r.a.createElement(m.a,null,r.a.createElement(h.a,{span:12},r.a.createElement(E.a,{style:{fontSize:"25px"}})),r.a.createElement(h.a,{offset:2},"Substandard")),r.a.createElement(m.a,null,r.a.createElement(h.a,{span:12},r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}})),r.a.createElement(h.a,{offset:2},"Below Average")),r.a.createElement(m.a,null,r.a.createElement(h.a,{span:12},r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}})),r.a.createElement(h.a,{offset:2},"Average")),r.a.createElement(m.a,null,r.a.createElement(h.a,{span:12},r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}})),r.a.createElement(h.a,{offset:2},"Above Average")),r.a.createElement(m.a,null,r.a.createElement(h.a,{span:12},r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}}),r.a.createElement(E.a,{style:{fontSize:"25px"}})),r.a.createElement(h.a,{offset:2},"Exceptional")))),r.a.createElement("br",null),r.a.createElement(v,{posts:w})))};a(156);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,{title:"React-Teave"}),r.a.createElement(x,null))};s.a.render(r.a.createElement(T,null),document.getElementById("root"))},88:function(e){e.exports=JSON.parse('[{"title":"Jasmine Yin Hao, Adagio Teas","body":"A solid jasmine tea from Adagio.","long_body":"A solid jasmine tea from Adagio. The floral notes of the jasmine are clearly woven through the tea, but it is not too overpowering. The instructions provided do tend to make a leafier sort of tea, so I recommend tasting as the tea steeps to find the point when you can just smell the jasmine. For me, I find the 1 minute 30 second mark to be perfect, depending on the temperature of the water.","date":"2018","scores":{"brewingEase":3,"flavor":4,"cost":5}},{"title":"Dragon Pearl Jasmine Tea, Harney and Sons","body":"This is truly a remarkable jasmine tea from Harney and Sons.","long_body":"This is truly a remarkable jasmine tea from Harney and Sons. It doesn\'t require a careful watch of the time to achieve an excellent cup of tea. The floral jasmine notes are clear here without any sort of leafiness. I tried steeping it multiple times and the result was was the same. The texture of the tea is smooth and almost rich, which is something I have never experienced in a floral tea before. It almost hugs your lips as you sip it.","date":"2018","scores":{"brewingEase":4,"flavor":4,"cost":2}},{"title":"Golden Buds Jasmine Tea, Teavivre","body":"Mellow, round, and fragrant, but expensive for a jasmine tea.","long_body":"Mellow, round, and fragrant. The smell of jasmine cuts through the tea, but it is not too cloying. Most Jasmine teas are delicate green things, but here, black whole leaves are used to great effect to round out the sweet smell of jasmine. The tea itself is smooth, although you would need to control the time carefully to prevent bitterness. However, it is a little expensive, so I recommend getting a sampler.","date":"2019","manufacturer":"Teavivre","scores":{"brewingEase":3,"flavor":5,"cost":1}},{"title":"Japanese Sencha, Harney and Sons","body":"A full-mouthed, flavourful tea.","long_body":"A full-mouthed, flavourful tea that has that healthy smell of fresh vegetables that reminds you of a field after a rain. I really like this tea as a go-to tea to drink at any time of the day.","date":"2018","scores":{"brewingEase":3,"flavor":4,"cost":4}},{"title":"Lu Shan Yun Wu Green Tea, Teavivre","body":"A fresh, dry tea. Perfect for finishing after a oily or greasy meal.","long_body":"This tea has a strong sense of that fresh veggie flavour that is similar to sencha. It has a slightly nutty aroma to it and a dry aftertaste. Pretty easy to brew and is quite consistent in flavour. However, a bit on the expensive side.","date":"2019","manufacturer":"Teavivre","scores":{"brewingEase":4,"flavor":4,"cost":2}},{"title":"Hot Cinnamon Spice Tea, Harney and Sons","body":"A great tea to drink, and a fun surprise for those who have never tasted it before.","long_body":"The first reaction I had to this tea was absolute astonishment. This tea is sweet! But the claim is that this tea does not contain any sugars. The sweetness is as if I added two teaspoons of sugar in it, so it is not just a hint, but definitely in the forefront and center of the taste of this tea. The cinnamon warms up the tea, and citrus tones from the dried orange peels give it a little zing. This is clever because the hint of spiciness is enhanced by the zing of the orange. Without it, in order to achieve the same level of spiciness, the cinnamon might have overwhelmed any other flavour, making it undrinkable. As it stands, this is a masterful blend that brings together several tastes into a complementary whole.","date":"2019","scores":{"brewingEase":4,"flavor":4,"cost":5}},{"title":"Paris Tea, Harney and Sons","body":"A wonderful blend that does not disappoint.","long_body":"This is a rich black tea and oolong mix from Harney and Sons. It smells like fruit punch without the coying sweetness, and with a touch of caramel that gives it a pleasant smoothness. A hint of vanilla lingers just on the edge to reinforce the caramel. This is one of the rare teas that tastes like it smells.","date":"2017","html_link":"https://www.harney.com/products/paris-tea","manufacturer":"Harney and Sons","package":"$8.50 (4 oz.)","scores":{"brewingEase":4,"flavor":5,"cost":4}},{"title":"Earl Grey Bravo, Adagio Teas","body":"A bright blend excellent for turning those gloomy days into bright ones. Good if you had a bad experience with earl greys.","long_body":"I don\'t personally like Earl Grey teas, but this tea won me over. A nice and bright tea that reminds me of a early spring morning. The taste is fresh, and doesn\'t taste like soap, which was what that turned me off earl grey teas in the first place.","date":"2017","html-link":"https://www.adagio.com/black/earl_grey_bravo.html","manufacturer":"Adagio Teas","package":"$7.00 (3 oz.)","scores":{"brewingEase":3,"flavor":4,"cost":5}},{"title":"Superfine Ali Shan Oolong Tea, Teavivre","body":"An epitome of oolong teas.","long_body":"To be really honest, this is what you should be spending your money on at Teavivre. As opposed to their other teas, their oolongs are priced comparitively with other sellers, and this is where the origin of the tea actually matters. The Ali shan oolong tea does what it says on the label: it goes out and wins a medal, and it is really, really smooth and thick, almost like honey compared to other green leaves. It is very clearly an oolong tea, there\'s no doubt about that. I think for its price, it is quite a good introduction to oolong teas. It doesn\'t require precise temperature control, and is rather forgiving if you steep it a little long.","date":"2019","html-link":"https://www.teavivre.com/superfine-taiwan-alishan-oolong-tea.html","manufacturer":"Teavivre","package":"$23.90 (3.5 oz)","scores":{"brewingEase":4,"flavor":4,"cost":5}},{"title":"Green Tea with Jasmine, Taylors of Harrogate","body":"A convenient, cheap, and good option for jasmine tea. ","long_body":"I remember drinking this tea on a early Saturday morning. The day was just starting and the morning light was just filtering in through the windows. Jasmine notes are muted, but this is balanced by a faint honey sweetness in the tea which I found delightful. The tea itself is a little thin. I feel that if this tea could be obtained in loose leaf form, it will be higher up on the list.","date":"2018","html-link":"Avaliable on Amazon","manufacturer":"Taylors of Harrogatee","package":"$6.32 (50 teabags)","scores":{"brewingEase":3,"flavor":3,"cost":5}}]')},93:function(e,t,a){e.exports=a(157)}},[[93,1,2]]]);
//# sourceMappingURL=main.f9961f47.chunk.js.map