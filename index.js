const imagebox = document.querySelector(".image-box");
const MainImage = document.querySelector(".main-image");
const images = document.querySelectorAll(".left-content-box");
const RightContent = document.querySelector(".right-content");



images.forEach((e)=>{
    e.addEventListener("click" , function (ele) {
        console.log(ele.target);
        switch (ele.target.id) {
            case "img-1":
                document.documentElement.style.setProperty("--bg-color" , "#21a5d5");
                document.documentElement.style.setProperty("--main-bg-color" , "rgb(164 207 222)");
                MainImage.src ="./images/blueberry.png";
                imagebox.style.width = "35%";
                // MainImage.style.top = "-190px";

                console.log("img-1");
                RightContent.style.transform = "rotate(0deg)";

                
                        break;
            case "img-2":
                document.documentElement.style.setProperty("--bg-color" , "rgb(122 160 45)");
                document.documentElement.style.setProperty("--main-bg-color" , "rgb(193 214 150)");
                MainImage.src ="./images/kiwi.png";
                imagebox.style.width = "25%";
                // MainImage.style.top = "-190px";

                console.log("img-2");
                RightContent.style.transform = "rotate(-81deg)";  

                        break;
            case "img-3":
                document.documentElement.style.setProperty("--bg-color" , "rgb(255 193 24)")
                document.documentElement.style.setProperty("--main-bg-color" , "rgb(255 242 148)");
                MainImage.src ="./images/orange.png";
                // MainImage.style.top = "-90px";
                imagebox.style.width = "25%";

                console.log("img-3");
                RightContent.style.transform ="rotate(-170deg)";

                break;
        
                case "img-4":
                document.documentElement.style.setProperty("--bg-color" , "rgb(236 82 77)")
                document.documentElement.style.setProperty("--main-bg-color" , "rgb(255 198 196)");
                MainImage.src ="./images/strawberry.png";
                imagebox.style.width = "25%";
                // MainImage.style.top = "-190px";
                console.log("img-4");
                RightContent.style.transform = "rotate(-260deg)";


                break;
        }

    })
})
