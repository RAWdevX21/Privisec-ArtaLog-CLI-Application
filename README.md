# <span style="font-size: 35;font-weight: bold; color: DodgerBlue;">A<span style="font-size: 22; color: DeepSkyBlue;">RCH</span><span style="font-size: 22;">W</span><span style="font-size: 22; color: DeepSkyBlue;">ORK</span></span><br><span style="font-size: 16px; color: DeepSkyBlue;"><sup>A Command Line Inventory Application</sup></span>

Archwork is a command line inventory program designed to revolutionize the way you manage your art collection through the _command-line interface (CLI)_. Derived from the words "**_arch_**ive" and "art**_work_**," this app embodies the power and essence of archiving with the artistry of organization. Whether you're an artist, collector, or enthusiast, Archwork provides a seamless experience while empowering you to effortlessly catalog and maintain your valuable **Archwork**.<hr>

## The SEED For Development

The creation of **Archwork** was born out of a class project and the heartfelt connection to my beloved godparents, my dads. As a tribute to their passion for art, Archwork aims to simplify the process of managing art collections, inspired by one of my dads, a celebrated artist and illustrator renowned for his captivating fashion sketch illustrations that embody the glamour of the '70s. With overflowing bins of sketches in his studio and a rich archive of artworks from various established artists and friends, the need for an efficient inventory management system became evident.

### <u>Key Challenges Addressed</u>

Managing an art collection comes with numerous challenges, some of the difficulties they encounter include:

- Keeping track of specific artworks in the archive and identifying relevant details.
- Determining the value of individual artworks for insurance purposes or potential sales.
- Mitigating risks of damage or deterioration by lacking proper documentation, including material information, environmental considerations, or previous restoration work.
- Overcoming limitations for loans, exhibitions, collaborations, or contributions to scholarly collections.
- Ensure tracing of historical context for future generations and enhancing scholarly collections.
- Addressing complexities in estate planning or ownership transfer without clear inventory documentation.

Motivated by their challenges, my dads sought my assistance in establishing a comprehensive inventory. While existing application systems provide specialized services, they often come with a hefty cost. To address this, I created Archwork—a lightweight application that simplifies documenting key information for various works. It covers details such as artists, titles, dates, mediums, dimensions, appraisal valuations, descriptions, provenance, image files, and acquisition history. In addition, Archwork introduces the innovative "vendor cart" system for seamless consignment arrangements. The vendor's cart enables consignees to build transactional orders for requested items, which are then submitted to the owner for approval. The system allows optional pricing outlines, including minimum or suggested pricing, discounts, and promotions. It also provides flexibility for specifying the consignee's commission or fee structure and outlining payment methods for sold items.<hr>

## Features and Usage

<ul style = "list-style-type: none;">
<p style = "margin-left: -20px;margin-top: 0px;margin-bottom: 25px;font-size: 14px;">
Archwork offers a range of commands to simplify the management of your art inventory. Here are some sample commands to help you get started:</p>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
<i>Create</i> new entry:</span>
Appends a new art object and its details to a specific archive-collection
</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork create --title "Innerspace" --artist "Glenn Tunstull" --date "2015" --medium "oil on canvas" --dimensions "40x30" --valuation "6,500" --description "Capturing circular motions of vibrant colors" --image "innerspace.jpg"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Show item details:</span>Find and displays the details of a specific piece of work from a collection</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork search --title "Foggy Morning"
$ archwork show --title "Sunset Serenade"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
List all works of art:</span>Display all artworks in the inventory</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork list
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Filter properties:</span>Filters a collection based on specific criteria, such as artist or medium.</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$  archwork filter --artist "Gwen Tunstall"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Update artwork information:</span>Modify the details of an existing artwork</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork update --title "Sunset Serenade" --medium "Acrylic on canvas"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Delete art object:</span>Remove an artwork from the inventory</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork delete --title "Sunset Serenade"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Create a new vendor cart:</span>Start a new consignment arrangement</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork new cart
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Add an art product to your cart:</span>Include an artwork in the consignment order</li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork add to cart --title "Sunset Serenade"
```

<hr>
</blockquote>

<li style="margin-top: 25px;">🎨 <span style="padding-right: 6px;padding-left: 10px;font-size: 14px;font-weight: bold">
Cancel your vendor cart:</span>Discard the current consignment order</li></li>
<blockquote style="margin-top: 3px; margin-left: 32px;"><p style="padding-top: 2px; 
margin-bottom: 1px;font-size: 12px;">shell</p>

```shell
$ archwork cancel cart
```

<hr>
</blockquote>

<p style = "margin-left: -20px;margin-top: 25px;margin-bottom: 25px;font-size: 14px;">
Please note that a lot of features in <strong>Archwork</strong> are still in beta. Your feedback is valuable to us as we continue to improve the application, fix issues, and add new features in future updates. Archwork is designed to be user-friendly and accessible to both tech-savvy users and beginners alike. With the perfect alignment of my dad's request and this assignment, Archwork emerged as a solution to alleviate the challenges and costs associated with managing and preserving art collections.
</p></ul><hr>

## Getting Started

<ol><p>To run <span style="font-weight: bold;">Archwork</span> on your local machine, follow these steps:</p>

<li style="margin-top: 25px;">Clone the **Archwork** repository to your local machine</li>

> <sub>shell</sub>
>
> ```sh
> git clone https://github.com/username/archwork.git
> ```
>
> <hr>

<li style="margin-top: 25px;">Navigate to the project directory</li>

> <sub>shell</sub>
>
> ```sh
> cd archwork.git
> ```
>
> <hr>

<li style="margin-top: 25px;">Install npm</li>

> <sub>shell</sub>
>
> ```sh
> npm install
> ```
>
> <hr>

<li style="margin-top: 25px;">Run the application</li>

> <sub>shell</sub>
>
> ```sh
> node app.mjs
> ```
>
> <hr><p></p>

</ol>
<br><hr><hr>
   <p style="margin-top: 35px;margin-left: 10px;margin-bottom: -5px;"><sup><u>Please review the following disclaimer.</u></sup></span>
      <blockquote style="padding-top: 20px; padding-bottom: 20px;font-size: 11px;">
       <p style="margin-bottom: -10px;font-size: 18px; font-weight: bold; color: goldenRod;">
       <img src="assets/disclaimer-icon-dk.png" alt="A disclaimer icon">
       D<span style="font-size: 13px;">ISCLAIMER</span></p></sup><hr>

The use of Archwork, its features, and any actions taken based on the information provided by the application are at your own risk. Archwork and its contributors disclaim all liability for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the application or any material provided within.<hr>

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
Archwork is designed to provide a convenient inventory management solution for artworks and does not provide any guarantees or warranties regarding the accuracy, completeness, or reliability of the information stored or processed by the application.

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
Archwork strongly recommends consulting with legal professionals experienced in contract law or consignment arrangements to ensure that any consignment agreements or transactions conducted through the application adequately protect the interests of all parties involved.

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
Archwork does not assume responsibility for any insecure transactions, losses, damages, theft, or incidents involving consigned goods, whether arising from negligence, breach of contract, or any other legal theory. Users of Archwork are solely responsible for ensuring the security and proper handling of their consignment agreements, transactions, and any related assets.

<span style="font-weight: bold; color: goldenRod;">⚠️</span>
Archwork does not offer provisions for resolving disputes between parties, including mediation or arbitration. Users are encouraged to seek independent legal advice to address any disputes or legal issues that may arise from consignment arrangements facilitated by the application.<hr>

By using Archwork and its affiliations, you acknowledge and agree that the application and its contributors shall not be held liable for any claims, demands, damages, or losses, including but not limited to direct, indirect, incidental, special, or consequential damages, resulting from the use or reliance upon the application or any material provided within, even if advised of the possibility of such damages.

Please refer to the governing law of your jurisdiction that will apply in case of any legal issues arising from the use of Archwork or consignment arrangements facilitated through the application.<br>

</blockquote>
