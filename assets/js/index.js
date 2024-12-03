window.addEventListener('DOMContentLoaded', function( ) {

// D´eclaration des variables globales 
    const style = document.getElementById('style');
    const btn_nav = document.getElementById('btn_nav');
    const menu_nav = document.getElementById('menu_nav');
    const menu_nav2 = document.querySelector('#menu_nav > div');
    const leave_btn_menu = document.querySelector('#menu_nav > div > .leave_btn');
    const nav_menu = document.querySelector('#menu_nav nav');

    const infos = document.getElementById('infos');
    const leave_btn_infos = document.querySelector('#infos .leave_btn');
    const titre_proj = document.getElementById('titre_proj');
    const details = document.getElementById('details');
    const apercu = document.getElementById('apercu');
    const lien_proj = document.getElementById('lien_proj');

    const proj1 = document.querySelector('.grid .card:nth-child(1)');
    const proj2 = document.getElementById('reportageSCCUC');
    const proj4 = document.getElementById('videoCV');
    const proj5 = document.getElementById('pub_cineambulant');
    const proj6 = document.getElementById('courtmetrageS1');

    const call_to_action_stage = document.querySelector('header > a:first-child');
    const sablier = document.querySelector('header > a:first-child > img');
    const cv = document.querySelector('#cv_btn > a');



// D´eclaration des évenements déclenchés par les boutons et les liens cliquables du menu de navigation
    btn_nav.addEventListener('click',function( ) {
        menu_nav.setAttribute("style","display:flex");
        menu_nav2.setAttribute("style","display:flex");
    });
    leave_btn_menu.addEventListener('click',function( ) {
        menu_nav.removeAttribute("style");
    });
    nav_menu.addEventListener('click',function( ) {
        menu_nav.removeAttribute("style");
    });

// Accès détails des réalisations 
// RetroK7
    proj1.addEventListener('click',function( ) {
        infos.setAttribute("style","display:flex");
        titre_proj.innerHTML="RetroK7";
        details.innerHTML="Le but de ce projet était de réaliser une <strong>web TV</strong> de critique de cinéma dans des conditions de direct.<br>Il s'agit donc d'un rush non monté puisque enregistré en une prise.<br><strong>Le jingle, le logo ainsi que les extraits</strong> ont été préalablement créés par moi sur <strong>After Effects</strong> afin d'être prêts à diffuser le jour J lors du direct.";
        apercu.innerHTML="<video autoplay loop muted><source src='./assets/video/apercus_real/apercu_retrok7.mp4' type='video/mp4'>";
        lien_proj.removeAttribute("href");
        lien_proj.setAttribute("href","https://youtu.be/Cw0CAZfkeHg?si=gL-8TOt-9n2HnP-p");
    });
// Reportage SCCUC
    proj2.addEventListener('click',function( ) {
        infos.setAttribute("style","display:flex");
        titre_proj.innerHTML="Reportage - Concours JRE";
        details.innerHTML="Ce projet a été réalisé dans le cadre du concours <a href='https://jeunesreporters.org/'>Jeunes Reporters pour l'Environnement</a>.<br>Pour parler de la réduction des inégalités, du bien-être et de la santé en lien avec une éducation de qualité, nous avons choisi de produire un <strong>reportage de 3 min</strong> sur l'épicerie solidaire du SCCUC située à Angoulême.<br>J'ai pu m'adonner, de mon côté, à la <strong>post-production</strong> du projet (montage et création des animations).";
        apercu.innerHTML="<video autoplay loop muted><source src='./assets/video/apercus_real/apercu_reportageSCCUC.mp4' type='video/mp4'></video>";
        lien_proj.removeAttribute("href");
        lien_proj.setAttribute("href","https://youtu.be/S98SnK4PU5Q?si=wriSihT41-MJShkq");
    });
// Video CV
    proj4.addEventListener('click',function( ) {
        infos.setAttribute("style","display:flex");
        titre_proj.innerHTML="Video CV";
        details.innerHTML="Ce travail a été réalisé dans le cadre d'un cours d'anglais.<br>Hormis l'insert de clavier, tout ce qui est visible à l'écran a été créé par moi-même et le tout a été animé sur <strong>After Effects</strong>.<br>C'est à travers ce projet que j'ai pu découvrir <strong>ma passion pour la création d'animations</strong>.";
        apercu.innerHTML="<video autoplay loop muted><source src='./assets/video/apercus_real/apercu_videoCV.mp4' type='video/mp4'></video>";
        lien_proj.removeAttribute("href");
        lien_proj.setAttribute("href","https://youtu.be/7zGiEsBECRk?si=xA0AHjLka00fo2tW");
    });
// Pub Ciné Ambulant
    proj5.addEventListener('click',function( ) {
        infos.setAttribute("style","display:flex");
        titre_proj.innerHTML="Pub";
        details.innerHTML="Ce projet a été réalisé pour conclure ma première année de BUT MMI.<br>L'objectif était d'élaborer une campagne de communication pour une association fictive de cinéma itinérant charentais.<br>Ce qui nous a amenés, après l'élaboration de notre stratégie de com, à créer une charte graphique, un site web (WordPress), des affiches promotionnelles ainsi qu'une vidéo publicitaire consultable via le bouton ci-dessous.";
        apercu.innerHTML="<video autoplay loop muted><source src='./assets/video/apercus_real/apercu_pub_cineambulant.mp4' type='video/mp4'></video>";
        lien_proj.removeAttribute("href");
        lien_proj.setAttribute("href","https://www.youtube.com/watch?v=aJxYh-RXfPQ");
    });
// Court métrage S1
    proj6.addEventListener('click',function( ) {
        infos.setAttribute("style","display:flex");
        titre_proj.innerHTML="Exercice de court metrage";
        details.innerHTML="Ce projet a vu le jour dans le cadre d'une ressource dédiée à l'audiovisuel au cours de ma première année d'étude.<br>L'objectif était de réaliser un court métrage de maximum 5 min sur le thème de l'espoir.<br >Le projet m'a permis de réaliser en équipe pour la première fois un film de A à Z.<br>J'ai pu m'essayer à <strong>l'écriture scénaristique</strong> et acquérir davantage d'expérience dans mon <strong>rôle de cadreur</strong>.";
        apercu.innerHTML="<video autoplay loop muted><source src='./assets/video/apercus_real/apercu_courtmetrageS1.mp4' type='video/mp4'></video>";
        lien_proj.removeAttribute("href");
        lien_proj.setAttribute("href","./assets/autres/scénario court métrage S1.pdf");
    });

    leave_btn_infos.addEventListener('click',function( ) {
        infos.removeAttribute("style");
    });


// Animation sablier
    call_to_action_stage.addEventListener('mouseover',function( ) {
        sablier.setAttribute("style","rotate: 360deg;");
    });
    call_to_action_stage.addEventListener('mouseout',function( ) {
        sablier.removeAttribute("style");
    });
    call_to_action_stage.addEventListener('click',function( ) {
        cv.setAttribute("style","animation: stage 1s 9 alternate-reverse 1s;");
    });
    cv.addEventListener('click',function( ) {
        cv.removeAttribute("style");
    });
});
