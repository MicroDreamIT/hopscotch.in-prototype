<template>
    <div>
        <mdb-navbar expand="large" class="nav-menu">
            <mdb-container>
                <mdb-navbar-brand href="#" class="nav-logo">
                </mdb-navbar-brand>
                <mdb-navbar-toggler>
                    <mdb-navbar-nav>
                        <mdb-nav-item to="/" active>Home</mdb-nav-item>
                        <mdb-nav-item to="/home2">home2</mdb-nav-item>
                        <mdb-nav-item :to="{name:'products'}">Products</mdb-nav-item>
                        <mdb-nav-item :to="{name:'account-order'}">Account</mdb-nav-item>
                        <mdb-nav-item :to="{name:'cart-cart-page'}">
                            <div  class="cart-item">
                                <mdb-icon icon="shopping-cart" />
                                <mdb-badge color="white" class="ow-cart-badge">3</mdb-badge>
                            </div>
                        </mdb-nav-item>
                    </mdb-navbar-nav>
                    <span class="navbar-text">
                      <a href="" class="pr-3"> Account</a>
                       <a href=""> 24x7 Customer care </a>
                  </span>
                </mdb-navbar-toggler>
            </mdb-container>
    
        </mdb-navbar>
        <div class="mobile-menu">
            <router-link to="/">Home</router-link>
            <router-link :to="{name:'products'}">Products</router-link>
        </div>
    </div>

</template>
<style scoped lang="scss">
    .nav-logo{
        /*width: 112px;*/
        /*line-height: 40px;*/
        /*background: url(../../assets/images/hopscotch_typeface.svg) no-repeat,*/
        /*url(../../assets/images/hop.svg) no-repeat;*/
    }
    .nav-item{
        /*font-size: 14px;*/
        /*line-height: 16px;*/
        /*padding: 22px 0 0;*/
        /*font-weight: 400;*/
        /*color: #fff;*/
    }
    .navbar{
        /*padding-bottom: 5px;*/
        /*box-shadow: 6px 3px 5px #00000026!important;*/
    }
</style>
