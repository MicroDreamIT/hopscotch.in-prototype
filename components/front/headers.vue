<template>
    <div>
        
        <mdb-navbar expand="large" class="nav-menu d-flex justify-content-between align-items-start">
            <mdb-container >
                <mdb-navbar-brand href=" ">
                    MDIT
                </mdb-navbar-brand>
                <mdb-navbar-toggler>
                    <mdb-navbar-nav>
                        <mdb-nav-item to="/" active>Home</mdb-nav-item>
                        <mdb-nav-item to="/home2">Home - v2</mdb-nav-item>
                        <mdb-nav-item :to="{name:'products'}">Products</mdb-nav-item>
                        <mdb-nav-item :to="{name:'account-order'}">Account</mdb-nav-item>
                        <mdb-nav-item :to="{name:'product-show', params:{show:'winter-baby'}}">Product View</mdb-nav-item>
                        <mdb-nav-item :to="{name:'cart-cart-page'}">Cart Page</mdb-nav-item>
                        <mdb-nav-item to='/checkout/checkout-page'>checkout</mdb-nav-item>
                    </mdb-navbar-nav>
                    <mdb-navbar-nav right>
                        <mdb-dropdown tag="li" class="nav-item">
                            <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed>
                                <mdb-icon icon="user" />
                            </mdb-dropdown-toggle>
                            <mdb-dropdown-menu>
                                <mdb-dropdown-item :to="{name:'account-order'}">My Account</mdb-dropdown-item>
                                <mdb-dropdown-item>Logout</mdb-dropdown-item>
                            </mdb-dropdown-menu>
                        </mdb-dropdown>
                        <mdb-nav-item :to="{name:'cart-cart-page'}">
                            <div  class="cart-item">
                                <mdb-icon icon="shopping-cart" />
                                <mdb-badge color="black" class="ow-cart-badge">3</mdb-badge>
                            </div>
                        </mdb-nav-item>
                       
                    </mdb-navbar-nav>
                </mdb-navbar-toggler>
            </mdb-container>
    
        </mdb-navbar>
        <div class="mobile-menu">
            <router-link to="/">Home</router-link>
            <router-link :to="{name:'products'}">Products</router-link>
        </div>
    </div>

</template>
