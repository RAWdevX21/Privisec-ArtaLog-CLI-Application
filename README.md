# Privisec ArtaLog (PAL)

**Privisec ArtaLog ( _PAL_ )** is a revolutionary _CLI inventory management companion_ designed to provide a comprehensive and secure solution for cataloging and organizing art collections. With a strong emphasis on ***privacy*** and ***security***, PAL companion was created to meet the needs of individuals who value the protection of their art-related data and the efficient organization of their valuable assets. PAL combines the power of archiving with the artistry of organization, offering artists, collectors, and enthusiasts alike a centralized and structured experience that transforms the way art estates are managed.

----
## Table of Contents

    Introduction
    Installation
    Getting Started
    Using the Application
    Commands
        create
        showDetails
        listCollection
        filterByProperty
        update
        delete
        openNewCart
        addToCart
        cancelCart
    Creating a Secure User Profile
    Starting an Art Collection Database
    Using the Application
    Disclaimer
    Feedback and Support 

----
## Introduction<br>
<!-- COLLAPSIBLE SECTION ONE START -->
<details><summary style = "font-size: 16px;">
<u>The Inception of <strong>PAL</strong> Companion</u>
</summary>
<!-- CONTENT SECTION ONE -->
Privisec ArtaLog companion was initially conceived as a solution to the challenges faced by my dads, who are passionate art enthusiasts. Inspired by my one of my dads, a celebrated artist and illustrator known for his captivating fashion sketches from since the '70s, PAL is designed to simplify the management process for a collection of artwork. With overflowing bins of sketches in his studio and a rich archive of artworks from various established artists and friends, the need for an efficient inventory management system became evident.
<!-- COLLAPSIBLE SUB-SECTION START -->
<details>
<summary style = "font-size: 15px;"><u>Key Challenges Addressed</u></summary>
Managing a sizeable art collection can be a daunting task, but the <strong>PAL companion</strong> is here to help.
<!-- CONTENT SUB-SECTION ONE -->
We understand some of the specific challenges you may face, including:

* Keeping track of specific artworks and their relevant details within your archive.
* Determining the value of artworks for insurance purposes or potential sales.
* Protecting your collection from damage or deterioration by maintaining proper documentation.
* Overcoming limitations for loans, exhibitions, collaborations, or contributions to scholarly collections.
* Preserving the historical context of artworks for future generations and enhancing scholarly collections.
* Simplifying complexities in estate planning and ownership transfers through clear inventory documentation.
</details>
<!-- COLLAPSIBLE SUB-SECTION ONE END -->
</details>
<!-- COLLAPSIBLE SECTION ONE END && SECTION TWO START --><br>

<details><summary style = "font-size: 16px;">
<u>A Lightweight Solution with Powerful Features</u>
</summary>
<!-- CONTENT SECTION TWO -->
**Privisec Artalog** is the result of our commitment to providing an efficient inventory management system without the hefty price tag. It empowers you to document and track essential information for each artwork in your collection. From artists and titles to mediums, dimensions, descriptions, and even appraisal valuations, the _**PAL** companion_ covers it all.
We've also introduced the innovative "vendor cart" system, streamlining consignment arrangements. The vendor's cart allows consignees to build transactional orders for requested items, which are then submitted to you for approval. Set pricing outlines, specify commission structures, and define payment methods—all with ease and flexibility.
</details>
<!-- COLLAPSIBLE SECTION TWO END && SECTION THREE START --><br>

<details><summary style = "font-size: 16px;">
<u>Embrace the Power of <strong>PAL</strong> Companion</u>
</summary>
<!-- CONTENT SECTION THREE -->
PAL is here to revolutionize the way you manage your art collection. With the artistry of organization and the utmost focus on privacy and security, PAL offers a seamless and structured experience tailored to your needs. Say goodbye to the chaos of managing your art estate and say hello to effortless documentation, tracking, and organization.
Get ready to unleash the full potential of your art collection with the **Privisec ArtaLog** companion.</details><br>
<!-- COLLAPSIBLE SECTION THREE END -->

#### ***"Welcome to a new era of art management excellence!"***
<br><hr>

## Installation
<p style="margin: 0px 0px 25px 22px;">To install <em><strong>Privisec ArtLog</strong> companion</em> on your local machine, follow these steps:</p>

1. Clone `privisec-artalog` repository to your local machine:
    ```shell
    git clone https://github.com/username/artalog.git
    ```

2. Navigate to the project directory:
   ```sh
   cd artalog
   ```
3. Install the required dependencies using npm:
   ```sh
   npm install
   ```
4. npm install
   ```sh
   ```
5. 
<ol>
<p style="margin-bottom: 20px;">
</p>
<li style="margin: 5px 0px 5px;"></li>


<li style="margin: 15px 0px 5px;"></li>


<li style="margin: 15px 0px 5px;"></li>


<li style="margin: 15px 0px 5px;"></li>

```sh
node app.js
```
</ol><br><hr>

## Getting Started
<p style="margin-left: 22px">This is a sample</p>

1. hi
   
   ```shell
   jf
   ```

2. ld


<ol><p>To run <span style="font-weight: bold;">PAL</span> on your local machine, follow these steps:</p>

<li style="margin-top: 25px;">Clone the **Privisec ArtaLog** repository to your local machine</li>

 

```sh
git clone https://github.com/username/pal.git
```

<li style="margin-top: 25px;">Navigate to the project directory</li>

 

 ```sh
 cd pal.git
 ```

 <hr>

<li style="margin-top: 25px;">Install npm</li>

 

 ```sh
 npm install
 ```

 <hr>

<li style="margin-top: 25px;">Run the application</li>

 

 ```sh
 node app.js
 ```

 <hr><p></p>

</ol>
<br><hr>

## Features and Usage

<ul style = "list-style-type: none;">
<p style = "margin-left: -20px;margin-top: 0px;margin-bottom: 25px;font-size: 14px;">
PAL offers a range of commands to simplify the management of your art inventory. Here are some sample commands to help you get started:</p>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
<i>Create</i> new entry:</span>
Appends a new art object and its details to a specific archive-collection
</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal create --title "Innerspace" --artist "Glenn Tunstull" --date "2015" --medium "oil on canvas" --dimensions "40x30" --valuation "6,500" --description "Capturing circular motions of vibrant colors" --image "innerspace.jpg"
```

<hr>
</blockquote>
<!----------------- //NOTE - SHOW command --------------------------->
<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Show item details:</span>Find and displays the details of a specific piece of work from a collection</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal show --title "Foggy Morning"
$ pal show --id "akILjH090J"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
List all works of art:</span>Display all artworks in the inventory</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal list
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Filter properties:</span>Filters a collection based on specific criteria, such as artist or medium.</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$  pal filter --artist "Gwen Tunstall"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Update artwork information:</span>Modify the details of an existing artwork</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal update --title "Sunset Serenade" --medium "Acrylic on canvas"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Delete art object:</span>Remove an artwork from the inventory</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal delete --title "Sunset Serenade"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Create a new vendor cart:</span>Start a new consignment arrangement</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal new cart
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Add an art product to your cart:</span>Include an artwork in the consignment order</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal add to cart --title "Sunset Serenade"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Cancel your vendor cart:</span>Discard the current consignment order</li></li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ pal cancel cart
```

<hr>
</blockquote>

<p style = "margin-left: -20px;margin-top: 25px;margin-bottom: 25px;font-size: 14px;">
Please note that a lot of features in <strong>PAL</strong> are still in beta. Your feedback is valuable to us as we continue to improve the application, fix issues, and add new features in future updates. PAL is designed to be user-friendly and accessible to both tech-savvy users and beginners alike. With the perfect alignment of my dad's request and this assignment, PAL emerged as a solution to alleviate the challenges and costs associated with managing and preserving art collections.
</p></ul><hr>

   <p style="margin-top: 35px;margin-left: 10px;margin-bottom: -5px;"><sup><u>Please review the following disclaimer.</u></sup></span>
      <blockquote style="padding-top: 20px; padding-bottom: 20px;font-size: 11px;">
       <p style="margin-bottom: -10px;font-size: 18px; font-weight: bold; color: goldenRod;">
       <img src="assets/disclaimer-icon-dk.png" alt="A disclaimer icon">
       D<span style="font-size: 13px;">ISCLAIMER</span></p></sup><hr>

The use of Privisec ArtaLog, its features, and any actions taken based on the information provided by the application are at your own risk. Privisec ArtaLog and its contributors disclaim all liability for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the application or any material provided within.<hr>

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
PAL is designed to provide a convenient inventory management solution for artworks and does not provide any guarantees or warranties regarding the accuracy, completeness, or reliability of the information stored or processed by the application.

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
PAL strongly recommends consulting with legal professionals experienced in contract law or consignment arrangements to ensure that any consignment agreements or transactions conducted through the application adequately protect the interests of all parties involved.

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
PAL does not assume responsibility for any insecure transactions, losses, damages, theft, or incidents involving consigned goods, whether arising from negligence, breach of contract, or any other legal theory. Users of PAL are solely responsible for ensuring the security and proper handling of their consignment agreements, transactions, and any related assets.

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
PAL does not offer provisions for resolving disputes between parties, including mediation or arbitration. Users are encouraged to seek independent legal advice to address any disputes or legal issues that may arise from consignment arrangements facilitated by the application.<hr>

By using PAL and its affiliations, you acknowledge and agree that the application and its contributors shall not be held liable for any claims, demands, damages, or losses, including but not limited to direct, indirect, incidental, special, or consequential damages, resulting from the use or reliance upon the application or any material provided within, even if advised of the possibility of such damages.

Please refer to the governing law of your jurisdiction that will apply in case of any legal issues arising from the use of PAL or consignment arrangements facilitated through the application.<br>

</blockquote>
