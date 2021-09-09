<template>
  <div class="footerContainer">
    <div class="footer">
      <div class="footerCollum">
        <h3>Shop</h3>
        <p>RazerCookies</p>
        <p>Cake Locator</p>
        <p>Puchase Programs</p>
        <p>Exclusive Muffins</p>
        <p>Last Chance Doughnuts!</p>
        <p>Newsletter</p>
      </div>

      <div class="footerCollum">
        <h3>Explore</h3>
        <p>Cookie Technologies</p>
        <p>RGB Cakes</p>
        <p>Conceps</p>
        <p>Esport Doughnuts</p>
        <p>Collabs</p>
      </div>

      <div class="footerCollum">
        <h3>Support</h3>
        <p>Warranty</p>
        <p>CookieCare</p>
        <p>Manage Cake ID</p>
      </div>
      <div class="footerCollum">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press Room</p>
        <p>Investor Relations</p>
        <p>Contact Us</p>
      </div>
      <div class="footerCollum" id="forGamers">
        <h3>FOR GAMERS. BY GAMERS.™</h3>
        <i class="fa fa-twitter fa-2x"></i>
        <i class="fab fa-instagram fa-2x"></i>
        <i class="fab fa-facebook fa-2x"></i>
      </div>
    </div>
    <div class="footerFooter">
      <div class="left">
        <p>Copyright © 2021 Furious Turtles Inc. All rights reserved.</p>
        <p>Site Map</p>
        <p>Legal Terms</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <p>Sweden</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footerContainer {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #111111;
  overflow: hidden;
  text-align: center;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.footerCollum {
  text-align: left;
  margin-top: 0px;
  margin-bottom: auto;
}
.left {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
p {
  color: #8a8a8a;
  transition: 0.1s;
}
p:hover {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}
h3 {
  color: #ededed;
}
#forGamers,
#forGamers h3 {
  color: lime;
  text-align: right;
}
</style>