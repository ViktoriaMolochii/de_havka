/*global google*/
import React from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
    apiKey: "AIzaSyCLMaPVOAW98gAe3sbIFYOdgUnpoZhCfak",
    version: "weekly",
});
let map;
let arr=['Marker_Fish' , 'Marker_Meat','Marker_Cooking','Marker_Vegetables' ,'Marker_Cash',
    'Marker_Flowers','Marker_Drinks','Marker_Cafe', 'Marker_Bakery', 'Marker_Gastronomy',
    'Marker_Alcohol', 'Marker_Sweets', 'Marker_Lavka','Marker_Bar','Marker_MilkFood',
    'Marker_FrozenFood ', 'Marker_NonFood', 'Marker_CoffeeTea', 'Marker_Grocery',
    'Marker_CannedFood', 'Marker_Press', 'Marker_ColdDrinks', 'Marker_ChildFood',' Marker_Eggs'] ;
loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:49.84926512507221, lng: 24.021481756414516},
        zoom: 20.5,
    });

    arr.Marker_Fish=new google.maps.Marker({
        position:{ lat:49.849217311699284, lng: 24.02132739197455},
        map,
        title: "Риба",
        opacity:0,
    });
    arr.Marker_Meat=new google.maps.Marker({
        position:{ lat:49.849278218557416, lng: 24.021326221209076},
        map,
        title: "М'ясо",
        opacity:0,
    });

    arr.Marker_Cooking=new google.maps.Marker({
        position:{ lat:49.84931646910777, lng: 24.0213182136384},
        map,
        title: "Кулінарія",
        opacity:0,
    });
    arr.Marker_Vegetables=new google.maps.Marker({
        position:{ lat:49.84922374193378, lng:  24.02156667467375},
        map,
        title: "Фрукти та овочі",
        opacity:0,
    });
    arr.Marker_Cash=new google.maps.Marker({
        position:{ lat:49.84917682603743, lng:24.02152030045225},
        map,
        title: "Фрукти та овочі",
        opacity:0,
    });
    arr.Marker_Flowers=new google.maps.Marker({
        position:{ lat:49.84917725841079, lng: 24.021575956288416},
        map,
        title: "Квіти",
        opacity:0,
    });
    arr.Marker_CoffeeTea=new google.maps.Marker({
        position:{ lat:49.849256382668244, lng:  24.021592049542246},
        map,
        title: "Кава, чай, джеми",
        opacity:0,
    });
    arr.Marker_Cafe=new google.maps.Marker({
        position:{ lat:49.849294378690054, lng: 24.021636452825316},
        map,
        title: "Кафе",
        opacity:0,
    });
    arr.Marker_Bakery=new google.maps.Marker({
        position:{ lat:49.849324212369375, lng:  24.021576103123444},
        map,
        title: "Хлібна майстерня",
    });
    arr.Marker_Gastronomy=new google.maps.Marker({
        position:{ lat:49.84931859153267, lng: 24.021410476719442},
        map,
        title: "Гастрономія",
        opacity:0,
    });
    arr.Marker_Alcohol=new google.maps.Marker({
        position:{ lat:49.84928140751939,  lng:  24.02142455831654},
        map,
        title: "Алкогольні напої",
        opacity:0,
    });
    arr.Marker_Sweets=new google.maps.Marker({
        position:{ lat:49.84929264920083,  lng:24.021500330719995},
        map,
        title: "Кондитерські вироби",
        opacity:0,
    });
    arr.Marker_Lavka=new google.maps.Marker({
        position:{ lat:49.84929697292375,  lng: 24.021393042361122},
        map,
        title: "Лавка традицій",
        opacity:0,
    });
    arr.Marker_Bar=new google.maps.Marker({
        position:{ lat:49.849259356521245,  lng: 24.021393712913365},
        map,
        title: "Кафе-бар",
        opacity:0,
    });
    arr.Marker_MilkFood=new google.maps.Marker({
        position:{ lat:49.849227793310334,  lng: 24.021417852794112},
        map,
        title: "Молочні та кисломолочні продукти",
        opacity:0,
    });
    arr.Marker_FrozenFood=new google.maps.Marker({
        position:{ lat:49.849229955174756,   lng: 24.02139706567458},
        map,
        title: "Морожені продукти та напів-фабрикати",
        opacity:0,
    });
    arr.Marker_NonFood=new google.maps.Marker({
        position:{ lat:49.84923211703909, lng: 24.021470826421304},
        map,
        title: "Непродовольчі продукти",
        opacity:0,
    });
    arr.Marker_Drinks=new google.maps.Marker({
        position:{ lat:49.849227793310334, lng: 24.021447357092804},
        map,
        title: "Слабо- та безалкогольні напої",
        opacity:0,
    });
    arr.Marker_CannedFood=new google.maps.Marker({
        position:{ lat:49.849228658056106, lng:24.021527152809714},
        map,
        title: "Консерви",
        opacity:0,
    });
    arr.Marker_Grocery=new google.maps.Marker({
        position:{ lat:49.849228658056106, lng:24.021506365690186},
        map,
        title: "Бакалія",
        opacity:0,
    });
    arr.Marker_Press=new google.maps.Marker({
        position:{ lat:49.84918152938752, lng:  24.021356161987615},
        map,
        title: "Преса",
        opacity:0,
    });

    arr.Marker_ColdDrinks=new google.maps.Marker({
        position:{ lat:49.84924811483098, lng: 24.02143327549556},
        map,
        title: "Охолоджені напої",
        opacity:0,
    });
    arr.Marker_ChildFood=new google.maps.Marker({
        position:{ lat:49.849246817712825,   lng:24.02153184667527},
        map,
        title: "Дитяче харчування",
        opacity:0,
    });
    arr.Marker_Eggs=new google.maps.Marker({
        position:{ lat:49.84920790415205,   lng: 24.02141382948051},
        map,
        title: "Яйця і яєчні вироби",
        opacity:0,
    });


        const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(49.84916939772307, 24.021310673681345),
        new google.maps.LatLng(49.8493260956819, 24.021663490608788)
    );
    let image ="https://i.pinimg.com/564x/a5/92/05/a5920575f484ceb0e1eef3ac2fb07692.jpg";
    class USGSOverlay extends google.maps.OverlayView {
        bounds;
        image;
        div;

        constructor(bounds, image) {
            super();
            this.bounds = bounds;
            this.image = image;
        }
        onAdd() {
            this.div = document.createElement("div");
            this.div.style.borderStyle = "none";
            this.div.style.borderWidth = "0px";
            this.div.style.position = "absolute";
            const img = document.createElement("img");
            img.src = this.image;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.position = "absolute";
            // this.div.appendChild(div1);
            this.div.appendChild(img);
            const panes = this.getPanes();
            panes.overlayLayer.appendChild(this.div);
        }

        draw() {
            const overlayProjection = this.getProjection();
            const sw = overlayProjection.fromLatLngToDivPixel(
            this.bounds.getSouthWest()
            );
            const ne = overlayProjection.fromLatLngToDivPixel(
            this.bounds.getNorthEast()
            );
            if (this.div) {
                this.div.style.left = sw.x + "px";
                this.div.style.top = ne.y + "px";
                this.div.style.width = ne.x - sw.x + "px";
                this.div.style.height = sw.y - ne.y + "px";
            }
        }
    }
    const overlay = new USGSOverlay(bounds, image);
    overlay.setMap(map);
});
const Map = () => {
    return (
        <div id={'map'}></div>
    );
};

export default Map;