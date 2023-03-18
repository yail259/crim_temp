<nav class = "navbar">
    <ul class = "page_links">
        <!-- <li><a href='/'>new arrivals</a></li>
        <li><a href='/payment'>pay</a></li> -->
        <li><a href='/product'>product</a></li>
    </ul>

    <h1><a href='/'>crim_</a></h1>

    <ul class = "right_links">
        <!-- <li><a href = '/'>local</a></li>
        <li><a href = '/'>momaddress</a></li>
        <li><a href = '/'>dontclick</a></li> -->
    </ul>
</nav>
<!-- <div class = "searchbar">
    <input type='text' placeholder = '&#128269 What are you looking for?'>
</div> -->

<slot/>

<footer>
    <div class = "footer_links">
        <div class = "over_container">
            <div class = "footer_item">
                <h2>NEWSLETTER</h2>
                <ul>
                    <li><a href = '/newsletter'>Subscribe to our newsletter</a></li>
                </ul>
            </div>
            <!-- <div class = "footer_item">
                <h2>CLIENT SERVICES</h2>
                <ul>
                    <li><a href = '/'>FAQ</a></li>
                    <li><a href = '/'>Track Order</a></li>
                    <li><a href = '/'>Returns</a></li>
                    <li><a href = '/'>Delivery</a></li>
                    <li><a href = '/'>Payment</a></li>
                    <li><a href = '/'>BOOK AN APPOINTMENT<br>
                    Your selected store will reply shortly</a></li>
                </ul>
            </div> -->
            <div class = "footer_item">
                <h2>THE COMPANY</h2>
                <ul>
                    <!-- <li><a href = '/'>Careers</a></li> -->
                    <li><a href = '/'>Careers - Designs</a></li>
                    <li><a href = '/'>Legal</a></li>
                    <li><a href = '/'>Privacy Policy and Cookies</a></li>
                    <li><a href = '/'>The Givewell Programme</a></li>
                </ul>
            </div>
            <div class = "footer_item">
                <h2>CONNECT</h2>
                <ul>
                    <li><a href = 'https://www.facebook.com/crimanimal'>Facebook</a></li>
                    <li><a href = 'https://instagram.com/crim_apparel?igshid=ZDdkNTZiNTM='>Instagram</a></li>
                    <!-- <li><a href = '/'>Tiktok</a></li> -->
                </ul>
            </div>
            <div class = "footer_item">
                <h2>LANGUAGE</h2>
                <ul>
                    <!-- <li><a href = '/'>Find a store nearby</a></li> -->
                    <li><a href = '/'>Country / Region: Australia</a></li>
                    <li><a href = '/'>Language : English</a></li>
                </ul>
            </div>
            <div class = "footer_item1">
                <h2>CONTACT US</h2>
                <ul>
                    <li><a href = '/'>Our operators are available Mon-Fri 9a.m. - 5p.m.<br><br></a></li>
                    <li><a href = '/'>CALL US<br>
                    (+61) 450089183<br><br></a></li>
                    <li><a href = '/'>WHATSAPP<br>
                    (+61) 450089183<br><br></a></li>
                    <!-- <li><a href = '/'>EMAIL US<br>
                    vishnugrao@gmail.com</a></li> -->
                </ul>
            </div>
        </div>
    </div>
    <div class = "copyright">
        <p>&#169 Crimanimal 2023</p>
    </div>
</footer>

<style>
/*default font for everything in the header '*' indicates default*/
*
{   
    font-family: 'Calibri';
    color: #000000;
    background-color: #f9f6ee;
    text-decoration: none;
    margin: 0px;
    padding: 0px;
}

.page_links, h1, .right_links
{
    font-size: 17px;
    text-decoration: none;
    padding: 0 20px;
}

h1
{
    font-size: 30px;
}

.searchbar input
{
    font-size: 20px;
    border: 0;
    padding: 0px 30px;
    width: 100%;
}

.searchbar input:focus
{
    outline: none;
}

.searchbar
{
    display: flex;
    font-size: 20px;
    flex-direction: row; /*puts the three items (h1, page_links and right_links in horizontal row flexbox.*/
    flex-wrap: nowrap; /*keep all items on the same line*/
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom : 1px solid #000000;

}

.navbar
{
    display: flex;
    flex-direction: row; /*puts the three items (h1, page_links and right_links in horizontal row flexbox.*/
    flex-wrap: nowrap; /*keep all items on the same line*/
    justify-content: space-between; /*spaces the content out with the outermost starting on both ends and even space in between*/
    align-items: center;
    /*padding: 10px 10px;*/
    border-bottom : 1px solid #000000;
}

.page_links li, .right_links li
{
    display: inline-block;
    padding: 2px 10px;
}

.page_links li a:hover, .right_links li a:hover
{
    color: #000000;
    border: 1px solid;
    border-radius: 5px;
    padding: 2px 10px;
    margin: -3px -11px;
}

footer
{
    text-align: center;
    padding: 0;
    margin: 0;background-color: #000000;
}

footer .copyright
{
    color: #000000;
    background-color: #f9f6ee;
    font-size: 17px;
    padding: 10px;
}

footer .footer_links .footer_item h2, .footer_item1 h2
{
    font-size: 17px;
    text-align: left;
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
}

footer .over_container
{
    display: flex;
    flex-direction: row;
    border-bottom : 1px solid #000000;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    align-content: flex-start;
    width: 100%;
}

footer ul li
{
    list-style-type: none;
    text-decoration: none;
    text-align: left;
    margin: 0;
    padding: 0;
    padding-top: 5px;
}

footer .over_container .footer_item
{
    text-align: left;
    border-right: 1px solid #000000;
    padding-top: 10px;
    padding-bottom: 5px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
}

footer .over_container .footer_item1
{
    text-align: left;   
    padding-top: 10px;
    padding-bottom: 30px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
}

</style>