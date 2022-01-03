let Blog = {
    body: document.body,
    navbarEl: {
        navbar: null,
        logo: null,
        navContainer: null,
    },
    topblockEl: {
        topblock: null,
    },
    carouselEl: {
        carousel: null,
        itemsBlocks: ["","","","",""],
        blockItem: null,
        leftBtn: null,
        rightBtn: null,
    },
    heroEl: {
        hero: null,
    },
    footnotesEl: {
        footnotes: null,
    },
    state:{
        gridState: 0,
        gridStateInfo: ["1/2/2/3","1/3/2/4","1/4/2/5","1/5/2/6","1/6/2/7"],
    },

    startBlog(){
        this.lowElements();
        this.navbarElements();
        this.carouselElements();
        this.scrollObserver();
    },

    lowElements(){
        this.navbarEl.navbar = document.createElement("div");
        this.navbarEl.navbar.className =  "navbar";
        this.body.appendChild(this.navbarEl.navbar);

        this.topblockEl.topblock = document.createElement("div");
        this.topblockEl.topblock.className = "top-block";
        this.body.appendChild(this.topblockEl.topblock);
        
        this.carouselEl.carousel = document.createElement("div");
        this.carouselEl.carousel.className = "carousel";
        this.body.appendChild(this.carouselEl.carousel);

        this.heroEl.hero = document.createElement("div");
        this.heroEl.hero.className = "hero";
        this.body.appendChild(this.heroEl.hero);

        this.footnotesEl.footnotes = document.createElement("div");
        this.footnotesEl.footnotes.className = "footnotes";
        this.body.appendChild(this.footnotesEl.footnotes);
    },

    navbarElements(){
        console.log("navbarElements working");
        this.navbarEl.logo = document.createElement("img");
        this.navbarEl.logo.src = "../images/logo.png";
        this.navbarEl.logo.className = "navbar-logo";
        this.navbarEl.navbar.appendChild(this.navbarEl.logo);

        this.navbarEl.navContainer = document.createElement("div");
        this.navbarEl.navContainer.className = "navbar-cont";
        this.navbarEl.navbar.appendChild(this.navbarEl.navContainer);
    },

    carouselElements(){
        this.carouselEl.leftBtn = document.createElement("div");
        this.carouselEl.leftBtn.className = "carousel-lbutton";
        this.carouselEl.carousel.appendChild(this.carouselEl.leftBtn);
        this.carouselEl.leftBtn.addEventListener("click", Blog.checkLeft);

        this.carouselEl.rightBtn = document.createElement("div");
        this.carouselEl.rightBtn.className = "carousel-rbutton";
        this.carouselEl.carousel.appendChild(this.carouselEl.rightBtn);
        this.carouselEl.rightBtn.addEventListener("click", Blog.checkRight);

        for (let i = 0; i < Blog.carouselEl.itemsBlocks.length; i++) {
            this.carouselEl.blockItem = Blog.carouselEl.itemsBlocks[i];
            this.carouselEl.blockItem = document.createElement("div");
            this.carouselEl.blockItem.className = "carousel-block";
            this.carouselEl.blockItem.id = "carouselBlock"+i;
            this.carouselEl.carousel.appendChild(this.carouselEl.blockItem);
        }

    },

    checkLogic(){
        switch (Blog.state.gridState){
            case 0:
                document.querySelector("#carouselBlock0").style.gridArea = Blog.state.gridStateInfo[0];
                document.querySelector("#carouselBlock1").style.gridArea = Blog.state.gridStateInfo[1];
                document.querySelector("#carouselBlock2").style.gridArea = Blog.state.gridStateInfo[2];
                document.querySelector("#carouselBlock3").style.gridArea = Blog.state.gridStateInfo[3];
                document.querySelector("#carouselBlock4").style.gridArea = Blog.state.gridStateInfo[4];
                break;
            case 1:
                document.querySelector("#carouselBlock0").style.gridArea = Blog.state.gridStateInfo[4];
                document.querySelector("#carouselBlock1").style.gridArea = Blog.state.gridStateInfo[0];
                document.querySelector("#carouselBlock2").style.gridArea = Blog.state.gridStateInfo[1];
                document.querySelector("#carouselBlock3").style.gridArea = Blog.state.gridStateInfo[2];
                document.querySelector("#carouselBlock4").style.gridArea = Blog.state.gridStateInfo[3];
                break;
        
            case 2:
                document.querySelector("#carouselBlock0").style.gridArea = Blog.state.gridStateInfo[3];
                document.querySelector("#carouselBlock1").style.gridArea = Blog.state.gridStateInfo[4];
                document.querySelector("#carouselBlock2").style.gridArea = Blog.state.gridStateInfo[0];
                document.querySelector("#carouselBlock3").style.gridArea = Blog.state.gridStateInfo[1];
                document.querySelector("#carouselBlock4").style.gridArea = Blog.state.gridStateInfo[2];
                break;

            case 3:
                document.querySelector("#carouselBlock0").style.gridArea = Blog.state.gridStateInfo[2];
                document.querySelector("#carouselBlock1").style.gridArea = Blog.state.gridStateInfo[3];
                document.querySelector("#carouselBlock2").style.gridArea = Blog.state.gridStateInfo[4];
                document.querySelector("#carouselBlock3").style.gridArea = Blog.state.gridStateInfo[0];
                document.querySelector("#carouselBlock4").style.gridArea = Blog.state.gridStateInfo[1];
                break;

            case 4:
                document.querySelector("#carouselBlock0").style.gridArea = Blog.state.gridStateInfo[1];
                document.querySelector("#carouselBlock1").style.gridArea = Blog.state.gridStateInfo[2];
                document.querySelector("#carouselBlock2").style.gridArea = Blog.state.gridStateInfo[3];
                document.querySelector("#carouselBlock3").style.gridArea = Blog.state.gridStateInfo[4];
                document.querySelector("#carouselBlock4").style.gridArea = Blog.state.gridStateInfo[0];
                break;
            default:
                break;
        }
    },

    checkRight(){
        Blog.state.gridState++;
        if (Blog.state.gridState>4){
            Blog.state.gridState = 0;
        };
        Blog.checkLogic();
    },

    checkLeft(){
        Blog.state.gridState--;
        if (Blog.state.gridState<0){
            Blog.state.gridState = 4;
        };
        Blog.checkLogic();
    },

    scrollObserver(){
        window.addEventListener("scroll", function(event){
        console.log(this.scrollY,this.innerHeight);
        if (this.scrollY>this.innerHeight-200){
            Blog.navbarEl.navbar.classList.remove("fadeOnAni");
            Blog.navbarEl.navbar.classList.add("fadeOffAni");
        }
        else{
            Blog.navbarEl.navbar.classList.remove("fadeOffAni");
            Blog.navbarEl.navbar.classList.add("fadeOnAni");
        }
    })
    }
};

Blog.startBlog();