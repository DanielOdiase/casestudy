import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant X Case Study</title>
        <meta name="description" content="Webflow to Jamstack " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />

<meta prefix="og: http://ogp.me/ns#" property="og:title" content="Webflow to Jamstack" />

<meta prefix="og: http://ogp.me/ns#" property="og:description" content="Case Study --Converting Webflow to Jamstack ." />

<meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://drive.google.com/file/d/1UPfBC84zOiQHghbBQ4tfu9lzLO2T2jKp/view?usp=share_link" />

<meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://restaurantcasestudy.netlify.app/" />
<meta name="twitter:card" content="summary_large_image" />

<meta name="twitter:domain" content="https://restaurantcasestudy.netlify.app/" />

<meta name="twitter:title" content="Webflow to Jamstack ." />

<meta name="twitter:description" content="Case Study --Converting Webflow to Jamstack ." />

<meta name="twitter:image" content="https://drive.google.com/file/d/1UPfBC84zOiQHghbBQ4tfu9lzLO2T2jKp/view?usp=share_link" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar /> 
      <main className={styles.main}>
       <div className={styles.introP}>
         <h1>Webflow - Jamstack- Shopify Restaurant Project</h1>
         <p>
4 minute read
         </p>
         <p>
          Restaurant X is an online restaurant that offers high quality meals with freshly picked and sourced ingredients to provide exquisite taste experience. The goal was to migrate existing Webflow Shopify theme to a more customizable archictecture that will allow client to expand menu options and scale in future
         </p>
       </div>
       
       <div className={styles.description}>
        <div>
          <h2>Type</h2>
          <p>
            E-commerce Restaurant 
          </p>
        </div>
        <div>
          <h2>Stack</h2>
          <p>Next Js</p>
          <p>11ty</p>
          <p>Shopify</p>
          <p>Netlify</p>
        </div>
        <div>
          <h2>Live</h2>
          <p>Project still under construction</p>
        </div>

       </div>

       <div className={styles.image1}>
       <Image src="/szn1.png" alt="site logo"  fill sizes='100vw' />
       </div>
       <div>
        <h1>Project Purpose and Goal</h1>
        <p>The goal is to migrate existing Webflow Shopify theme to a more customizable archictecture that will allow client to expand menu options and 
          to scale in future. This posed a challenge for their Webflow themed site , and a new architectural structure had to be developed . </p>

       </div>
    
       <div>
        <h1>Web Architecture and Explanation</h1>
         <p className={styles.heady}> In selecting a framework ,i considered a few things... </p>
        <br/>
        <p>
          1.  What framework would allow me easily translate already written Webflow code? <br/>
          2.  What framework would allow for scalbility in the future? <br/>
          3.  What framework would allow for customization? <br/>
          4.  What framework would allow for a great user experience ie. fast load times? <br/>
          5.  What framework would allow me leverage the existing Shopify infrastructure? <br/> 
          <br/>
          I decided on using a decoupled <strong> Jamstack</strong> architectural approach utilizing <strong>Next Js</strong> as my <strong>static site generator </strong>,Shopify as my Headless cms /3rd party api and Netlify as my CDN {`(Content Delivery Network) `}due to the following reasons <br/> <br/> a. Ability to use Next Js {`( A powerful Static site generator) `}with capability for server side rendering of dynamic content <br/>b. I am very comfortable with the tools available in the JamStack ecosystem which allows for an easy transition of  Webflows code written in  html ,css,javascript <br/> c. Ability to easily connect to Shopify and fetch product data Via Api's <br/>
          d. Ability to <strong>test my changes locally </strong>before pushing to repo , Easily collaborate with Oke studios via comments on <strong> deploy previews</strong> , as well as <strong>continous integration and deployment </strong> capabilities {`(When i make changes and push to my repo, they're detected and an automatic deployment is triggered)`}. All made possible by deploying on <strong>Netlify Edge Network</strong> <br/>
        </p>
       </div>
       <div>
        <h1>Problems and Thought Process</h1>
        <p> Restaurant X contacted Oke Studios for a site redesign. They were looking to customize new features for client engagemnent. The problem they had was that the website  was created using a template webflow shopify theme, which did not allow for desired customization.
          Thats when I come in</p> <div className={styles.images}><br/> <Image src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmM0ZWNiYmZmODdmNzA2M2YwZTM3NjIwN2IyNTI0MWU4NGRhMGFkMyZjdD1n/l1gYcLBSdL7PoDsizo/giphy.gif' fill sizes='100vw' unoptimized={true}/><br/> </div> 
          <p>I was brought into the project to by Oke Studios to figure out a way to meet the clients desire 
            to customize site regularly and keep using the Shopify platform. 
            My brain went to working, and to satisfy this request I suggested working with a decoupled architecture. 
            This method seperates the front-end and back-end systems , which would allow the front-end to be 
            fully customizable, as well as keep the products on Shopify.
         The front-end {`(NextJs)`}would receive data from <strong>Shopify via Shopify's storefront Api keys </strong><br/> <strong style={{color:'red' ,fontStyle:'italic'}}> *Sidenote i originally planned on using 11ty because I found a platform {`(Udesly)`} that transforms webflow code to Jamstack {`(11ty) code`} this might still be done ,stay tuned</strong>  ????. <br/> </p> 
         <p><strong>I mapped the data using GraphQL queries</strong> to build static pages and utilized next js server side rendering for dynamic data <br/> </p>
         <br/> <div className={styles.images}><Image src="/GraphqlImg.png" fill sizes='100vw'/></div>
         <br/><div className={styles.images}><Image src="/staticgeneration.png" fill sizes='100vw'/>
          <br/>  </div>
       </div>
       <div>
        <h1>Lessons Learned </h1>
        <p>The lessons are still ongoing. Currently testing out 11ty capabilites , and trying to figure out why my 11ty file wont load ???? I'll keep y'all updated once project is complete </p>
       </div>
       <div>
        <h1>Future Challenges </h1>
        <p>While migrating to the Next Js framework, I had to rewrite a lot of the code used to create the previous website from scratch,which was a long process . For future projects in order to streamline a Webflow conversion i would most likely ...
       </p> <p>{'a).'}Getting a full understanding of how the Udesly platform works with Webflow to produce Jamstack code for 11ty .You can check out more details on this <strong style={{color:'RED'}}><Link href ="https://www.udesly.com/webflow-to-jamstack/">here</Link></strong></p>
          <p>{'b).'} Play around with 11ty to get a better understanding on how it handles dynamic data </p>
       </div>
      </main>
      <Footer />
    </>
  )
}
