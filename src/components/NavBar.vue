<template>
    <div id="nav-bar">
        
        
    </div>
    <header>
        <div class="header">
            <div class="header__logo">
              <router-link to="/products" id="products-link">
                <h1>Kwipper</h1>
              </router-link>
            </div>
            <div class="links">
                <router-link class="materiaal" to="/materiaal">Materiaal</router-link>
                <router-link class="verhuurder" to="/verhuurder">Word verhuurder</router-link>
            </div>
            <div class="searchbar">
                <div class="input-icon">
                    <input type="text" class="searchbar" name="searchbar" placeholder="naar waar ben je op zoek?">
                </div>
            </div>
            <router-link to="/cart" id="cart-link">
              <button>winkelmandje</button>
            </router-link>
            <div class="login">
                <router-link class="login_txt" to="/login">Inloggen</router-link>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44444 7.55556C9.44444 5.5517 10.2405 3.62991 11.6574 2.21297C13.0744 0.796029 14.9961 0 17 0C19.0039 0 20.9256 0.796029 22.3426 2.21297C23.7595 3.62991 24.5556 5.5517 24.5556 7.55556C24.5556 9.55941 23.7595 11.4812 22.3426 12.8981C20.9256 14.3151 19.0039 15.1111 17 15.1111C14.9961 15.1111 13.0744 14.3151 11.6574 12.8981C10.2405 11.4812 9.44444 9.55941 9.44444 7.55556ZM9.44444 18.8889C6.93962 18.8889 4.53739 19.8839 2.76621 21.6551C0.995037 23.4263 0 25.8285 0 28.3333C0 29.8362 0.597022 31.2776 1.65973 32.3403C2.72243 33.403 4.16377 34 5.66667 34H28.3333C29.8362 34 31.2776 33.403 32.3403 32.3403C33.403 31.2776 34 29.8362 34 28.3333C34 25.8285 33.005 23.4263 31.2338 21.6551C29.4626 19.8839 27.0604 18.8889 24.5556 18.8889H9.44444Z" fill="white"/>
                </svg>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 60px;
    width: 100%;
  }

  #products-link {
    text-align: center;
    display: block;
    
    font-size: 22px;
    
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
      color: white;
  }

  #cart-link button {
    /*position: absolute;
    right: 16px;
    top: 16px;*/
    background-color: #F0F2F1;
    color: #2B5740;
    font-size: none;
    font-weight: normal;
    padding: none;
    border-radius: 6px;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box; /* Include padding and border in element's total width and height */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #2B5740;
    z-index: 1000; /* This ensures the header is always on top of other elements */
    height: 64px;
}

.header__logo {
    padding: 1.5em;
}


.materiaal {
    padding: 1em;
    text-decoration: none;
    color: #F0F2F1;
}

.verhuurder {
    padding: 0.5em;
    color: #2B5740;
    text-decoration: none;
    margin: 1em;
    background-color: #F0F2F1;
    border-radius: 6px;
}

.input-icon {
  position: relative;
}

.input-icon::before {
  content: url('../../public/search.svg'); /* Replace with your icon path */
  position: absolute;
  right: 10px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
}

.searchbar input {
    padding: 0.5em;
    border: none;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
    background-color: #F0F2F1;
    color: #242424;
    padding-right: 90px;
}

.login {
    display: flex;
    align-items: center;
    padding: 1em;
}

.login_txt {
    padding: 1em;
    text-decoration: none;
    color: #F0F2F1;
    font-size: 16px;
}

</style>