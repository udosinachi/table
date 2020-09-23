import styled from 'styled-components'

export const Div = styled.div`
.hero-wrapper{
    background-image:url("../images/hero-bg.jpg");
    position:relative;
    width:100%;
    z-index:1;
    color:#fff;
    padding-top:246px;
    padding-bottom:230px
}

@media only screen and (min-width:768px) and (max-width:991px){
    .hero-wrapper{padding-top:200px;padding-bottom:350px}
}

@media only screen and (min-width:480px) and (max-width:767px){
    .hero-wrapper{padding-top:200px;padding-bottom:350px}
}

@media only screen and (min-width:320px) and (max-width:479px){
    .hero-wrapper{padding-top:200px;padding-bottom:490px}
}

.hero-wrapper .section-heading .sec__title{
    font-size:45px;color:#fff
}

@media only screen and (min-width:768px) and (max-width:991px){
    .hero-wrapper .section-heading .sec__title{font-size:40px;line-height:55px !important}
}

@media only screen and (min-width:480px) and (max-width:767px){
    .hero-wrapper .section-heading .sec__title{font-size:40px;line-height:55px !important}
}

@media only screen and (min-width:320px) and (max-width:479px){
    .hero-wrapper .section-heading .sec__title{font-size:40px;line-height:55px !important}
}

.hero-wrapper:after{
    position:absolute;
    content:'';
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    opacity:.8;
    background-color:#2c2c51
}

.hero-form-wrap{
    background-color:#fff;
    -webkit-border-radius:8px;
    -moz-border-radius:8px;
    border-radius:8px;
    padding:30px;
    -webkit-box-shadow:0 2px 40px rgba(82,85,90,0.1);
    -moz-box-shadow:0 2px 40px rgba(82,85,90,0.1);
    box-shadow:0 2px 40px rgba(82,85,90,0.1);
    width:100%;bottom:-283px;left:0;z-index:1
}

@media only screen and (min-width:768px) and (max-width:991px){
    .hero-form-wrap{bottom:-380px}
}

@media only screen and (min-width:480px) and (max-width:767px){
    .hero-form-wrap{bottom:-380px}
}

@media only screen and (min-width:320px) and (max-width:479px){
    .hero-form-wrap{
        bottom:auto;
        position:inherit;
        left:auto;
        margin-top:40px}
    }
    .hero-form-wrap:after{
        position:absolute;
        content:"";
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity:.1;
        z-index:-1;
        background-image:url('');
    }
`