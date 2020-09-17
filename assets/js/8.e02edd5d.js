(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"interplanetary-linked-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interplanetary-linked-data"}},[t._v("#")]),t._v(" Interplanetary Linked Data")]),t._v(" "),e("p",[t._v("Welcome to the internet of data structures!")]),t._v(" "),e("h2",{attrs:{id:"what-is-ipld"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-ipld"}},[t._v("#")]),t._v(" What is IPLD?")]),t._v(" "),e("p",[t._v("IPLD isn't a project or a library, it's an ecosystem. An\necosystem of formats and data structures for building\napplications that can be fully decentralized.")]),t._v(" "),e("p",[t._v("This ecosystem is held together by a few concepts and\nstandards that ensure compatibility between formats\nand programming languages.")]),t._v(" "),e("p",[t._v("You'll find numerous libraries for working with IPLD.\nYou may even create a few of your own. That library is\npart of the IPLD ecosystem and you're now a part of its\ncommunity. You don't need to be a committer in repository\nin the IPLD GitHub org to be a part of this community,\nyou're already almost there just by reading this far.")]),t._v(" "),e("h2",{attrs:{id:"from-data-to-data-structures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-data-to-data-structures"}},[t._v("#")]),t._v(" From Data to Data Structures")]),t._v(" "),e("p",[t._v("Hashes are wonderful.")]),t._v(" "),e("p",[t._v("If you hash something you can give that hash to anyone else\nin the world, anywhere in the galaxy (IP stands for Interplanetary),\nthey can tell if they have that data and when they send\nit to you, you're able to verify it was the right data even\nwithout trusting that person.")]),t._v(" "),e("p",[t._v("If you think of hashes like URLs, you can pass them around and\nask people for them without fixing the place where that data exists\ninto the link the way you do with a URL. This is really powerful,\nbut by itself it's a bit limited.")]),t._v(" "),e("p",[t._v("For one thing, there are lots of hash algorithms, and they keep\ngetting better. A hash doesn't say "),e("em",[t._v("what")]),t._v(" sort of hash it is. We\nsolved that with something called "),e("a",{attrs:{href:"https://github.com/multiformats/multihash",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("multihash")]),e("OutboundLink")],1),t._v('\nwhich is just a hash that says "I\'m a hash of this particular\nalgorithm."')]),t._v(" "),e("p",[t._v('So now, with multihash, a single identifier can get us any set\nof binary data (what we all a "Block") from anywhere in the world.')]),t._v(" "),e("p",[t._v("That's "),e("em",[t._v("data")]),t._v(", we've got that covered, but now we need to go from\n"),e("em",[t._v("data")]),t._v(" to "),e("strong",[t._v("data structures")]),t._v(".")]),t._v(" "),e("p",[t._v("This means that we have to think about different formats (JSON, CBOR,\nBitcoin, Ethereum, etc) and we also need to think about different\nprogramming languages (JavaScript, Go, Rust, etc) because these\nlanguages have different basic types that are used to represent data\nstructures in-memory.")]),t._v(" "),e("p",[t._v("That's IPLD.")]),t._v(" "),e("p",[t._v("IPLD is how we go from "),e("em",[t._v("data")]),t._v(" to "),e("strong",[t._v("data structures")]),t._v(".")]),t._v(" "),e("p",[t._v("We do this with a new link type and a data model.")]),t._v(" "),e("p",[t._v("For links we use a "),e("a",{attrs:{href:"https://specs.ipld.io/block-layer/CID.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CID"),e("OutboundLink")],1),t._v(". A CID is an extension of "),e("code",[t._v("multihash")]),t._v(",\nin fact a "),e("code",[t._v("multihash")]),t._v(" is part of a "),e("code",[t._v("CID")]),t._v(". All we extend it with\nis a "),e("em",[t._v("codec")]),t._v(" that tells us what format the data is in (JSON, CBOR,\nBitcoin, Ethereum, etc). This way, we can actually link between\ndata in different formats and any link to data anyone ever gives\nus can be decoded so that it can become more than just a series\nof bytes.")]),t._v(" "),e("p",[t._v("CID is a "),e("a",{attrs:{href:""}},[t._v("standard")]),t._v(" that anyone can implement, even people that\nhave no other interest in IPLD beyond the need for hash links to\ndifferent data types can use it.")]),t._v(" "),e("p",[t._v("The IPLD Data Model is a bit more conceptual, as it is applied\nto formats that had never considered IPLD.")]),t._v(" "),e("p",[t._v("Every language has a library for JSON encoding and decoding. These\nlanguages all adapt the JSON data model (types) into whatever the\nbest fit for their language is. Our data model is very similar,\nbut we add a few more types.")]),t._v(" "),e("p",[t._v("First, we add a link type using CID as our link format. We also\nadd binary values, which are missing from JSON. We support nothing\nbeyond that other than the types JSON has already defined quite well.")]),t._v(" "),e("p",[t._v("We then apply this data model to more than just our own formats. We\nhave specifications and libraries for interpreting many formats into\nthis data model. For instance, Bitcoin blocks know nothing about IPLD\nsince they were designed long before IPLD existed. We have a decoder\nfor Bitcoin that presents the data found in a Bitcoin block as IPLD\nData Model.")]),t._v(" "),e("p",[t._v("This provides a consistent interpretation of all formats across all programming\nlanguages in IPLD terms. For instance, the links in Bitcoin blocks are\nonly to other Bitcoin blocks and do not use CID's internally, but when\nyou use an IPLD codec to read them the links will all be normalized\nto CID's that link to Bitcoin blocks.")]),t._v(" "),e("p",[t._v("This lets you build data structures that freely link between formats\nthat can be traversed though a normalized data model. Effectively,\nyou can write format agnostic tools for reading, distributing, and\npersisting all content addressed data.")]),t._v(" "),e("h2",{attrs:{id:"tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),e("p",[t._v("We highly recommend you read the following tutorial\nbefore trying to use IPLD. This tutorial is language\nagnostic and includes examples in JavaScript, Go and Rust.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/tutorial.html"}},[t._v("Thinking in Data Structures")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/tutorial.html#addressing"}},[t._v("Addressing")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/tutorial.html#linking"}},[t._v("Linking")])],1)])],1)]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("Using IPLD can vary from language to language.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./getting-started/js"}},[t._v("Getting started in JavaScript")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./getting-started/js#storing-ipld-data-in-ipfs"}},[t._v("Persisting IPLD data in "),e("code",[t._v("js-ipfs")]),t._v(" and "),e("code",[t._v("js-ipfs-lite")])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"./getting-started/go"}},[t._v("Getting started in Go")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./getting-started/go#IPFS"}},[t._v("Persisting IPLD data in "),e("code",[t._v("go-ipfs")])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"./getting-started/rust"}},[t._v("Getting started in Rust")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./getting-started/rust#IPFS"}},[t._v("Persisting IPLD data in "),e("code",[t._v("rust-ipfs")])])])])])]),t._v(" "),e("h2",{attrs:{id:"glossary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html"}},[t._v("Full Glossary.")])],1),t._v(" "),e("h3",{attrs:{id:"blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[t._v("#")]),t._v(" Blocks")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html#blocks"}},[t._v("Abstract key/value pairing of CID and encoded data.")])],1),t._v(" "),e("h3",{attrs:{id:"codecs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codecs"}},[t._v("#")]),t._v(" Codecs")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html#codecs"}},[t._v("IPLD Data Model encoder/decoder for various multicodecs")])],1),t._v(" "),e("h4",{attrs:{id:"dag-cbor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dag-cbor"}},[t._v("#")]),t._v(" DAG-CBOR")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html#dag-cbor"}},[t._v("CBOR subset for IPLD Data Model")])],1),t._v(" "),e("h4",{attrs:{id:"dag-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dag-json"}},[t._v("#")]),t._v(" DAG-JSON")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html#dag-json"}},[t._v("JSON encoded IPLD Data Model")])],1),t._v(" "),e("h3",{attrs:{id:"data-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data-Model")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html#data-model"}},[t._v("Simple common types for working with IPLD")])],1),t._v(" "),e("h3",{attrs:{id:"hamt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hamt"}},[t._v("#")]),t._v(" HAMT")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/docs/glossary.html#hamt"}},[t._v("Multi-block map for large data sets.")])],1),t._v(" "),e("h2",{attrs:{id:"documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),e("h3",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/overview"}},[t._v("Overview")])]),t._v(" "),e("h3",{attrs:{id:"vision"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vision"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/vision"}},[t._v("Vision")])]),t._v(" "),e("h3",{attrs:{id:"pathing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pathing"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/pathing"}},[t._v("Pathing")])]),t._v(" "),e("h3",{attrs:{id:"schemas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schemas"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/schemas"}},[t._v("Schemas")])]),t._v(" "),e("h3",{attrs:{id:"advanced-data-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-data-layouts"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/advanced-layouts"}},[t._v("Advanced Data Layouts")])]),t._v(" "),e("h3",{attrs:{id:"selectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selectors"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/selectors"}},[t._v("Selectors")])]),t._v(" "),e("h3",{attrs:{id:"ecosystem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/ecosystem"}},[t._v("Ecosystem")])]),t._v(" "),e("h4",{attrs:{id:"graphsync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphsync"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/docs/ecosystem/graphsync.html"}},[t._v("Graphsync")])],1),t._v(" "),e("h3",{attrs:{id:"details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/details"}},[t._v("Details")])]),t._v(" "),e("h3",{attrs:{id:"open-research"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-research"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/opens-research"}},[t._v("Open Research")])]),t._v(" "),e("h3",{attrs:{id:"media"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#media"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"./docs/media"}},[t._v("Media")])]),t._v(" "),e("h3",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/docs/FAQ.html"}},[t._v("FAQ")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);