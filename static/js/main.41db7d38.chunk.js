(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={App:"App_App__3HC09",centred:"App_centred__xq1RN"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2e4vJ",Modal:"Modal_Modal__3CCFs"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3sUTs"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2Jur_",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1A3wt","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2HrxD"}},15:function(e,t,a){e.exports={Button:"Button_Button__335OI"}},43:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(8),o=a.n(n),c=a(12),s=a(3),i=a(4),l=a(6),u=a(5),h=a(10),m=a.n(h),p=a(7),d=a.n(p),b=a(0),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.searchItem=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.searchButton=function(t){t.preventDefault(),""!==e.state.query.trim()&&(e.props.onSubmit(e.state.query),e.setState({query:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:d.a.Searchbar,children:Object(b.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.searchButton,children:[Object(b.jsx)("button",{type:"submit",className:d.a.SearchForm_button,children:Object(b.jsx)("span",{className:d.a.SearchForm_button_label,children:"Search"})}),Object(b.jsx)("input",{onChange:this.searchItem,className:d.a.SearchForm_input,type:"text",placeholder:"Search images and photos"})]})})}}]),a}(r.Component),j=a(13),_=a.n(j),f=a(14),y=a.n(f);function S(e){var t=e.src,a=e.alt;return Object(b.jsx)("img",{src:t,alt:a,className:y.a.ImageGalleryItem_image})}function v(e){var t=e.images;return Object(b.jsx)(b.Fragment,{children:0!==t.length&&Object(b.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.user;return Object(b.jsx)("li",{children:Object(b.jsx)(S,{src:a,alt:r})},t)}))})})}var O=a(15),x=a.n(O);function w(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:x.a.Button,onClick:t,children:"Load more"})}var I=a(11),k=a.n(I),C=document.getElementById("modal-root"),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).closeModalByClickESC=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBackdrop=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalByClickESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalByClickESC)}},{key:"render",value:function(){return Object(n.createPortal)(Object(b.jsx)("div",{className:k.a.Overlay,onClick:this.handleClickBackdrop,children:Object(b.jsx)("div",{className:k.a.Modal,width:"300",heigth:"300",children:Object(b.jsx)("img",{src:this.props.src,alt:this.props.alt})})}),C)}}]),a}(r.Component),q=a(16),M=a.n(q);a(42);function B(){return Object(b.jsx)(M.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e5})}var G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],query:"",page:1,showModal:!1,showSpiner:!1,large:null,alt:null},e.onClose=function(){e.setState({showModal:!1})},e.handleFormSubmit=function(t){e.setState({query:t}),e.setState({page:1})},e.clickLoadMore=function(t){t.preventDefault(),e.setState((function(e){return{page:e.page+1}}))},e.fetchRequest=function(){e.setState({showSpiner:!0}),fetch("https://pixabay.com/api/?q=".concat(e.state.query,"&page=").concat(e.state.page,"&key=23320531-e67f94e9f6229e6b46894ace7&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){if(0===t.total)return e.setState({showSpiner:!1}),void alert("\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b\u043c");e.setState({images:[].concat(Object(c.a)(e.state.images),Object(c.a)(t.hits))}),e.setState({showSpiner:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){alert("\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(t){var a=t.target.src,r=e.state.images.find((function(e){return e.webformatURL===a}));r&&(e.setState({large:r.largeImageURL}),e.setState({alt:r.user}),e.setState({showModal:!0}))}))}},{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query?(this.setState({images:[]}),this.fetchRequest()):""!==this.state.query.trim()&&this.state.page!==t.page&&this.fetchRequest()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.large,r=e.alt,n=e.images,o=e.showSpiner;return Object(b.jsxs)("div",{className:m.a.App,children:[Object(b.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(v,{images:n}),n.length>=12&&Object(b.jsx)(w,{onClick:this.clickLoadMore}),t&&Object(b.jsx)(F,{src:a,onClose:this.onClose,alt:r}),o&&Object(b.jsx)("div",{className:m.a.centred,children:Object(b.jsx)(B,{})})]})}}]),a}(r.Component),N=G;o.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1HqzR",SearchForm:"Searchbar_SearchForm__11Ns3",SearchForm_button:"Searchbar_SearchForm_button__2dvi-",SearchForm_button_label:"Searchbar_SearchForm_button_label__39IBQ",SearchForm_input:"Searchbar_SearchForm_input__1D-TL"}}},[[43,1,2]]]);
//# sourceMappingURL=main.41db7d38.chunk.js.map