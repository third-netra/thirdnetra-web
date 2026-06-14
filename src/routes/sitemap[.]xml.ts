import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
const BASE_URL = "";
const paths=["/","/solutions","/services","/industries","/pricing","/case-studies","/about","/contact"];
export const Route=createFileRoute("/sitemap.xml")({server:{handlers:{GET:async()=>{const urls=paths.map((path)=>`  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path==="/"?"1.0":"0.8"}</priority>\n  </url>`); const xml=[`<?xml version="1.0" encoding="UTF-8"?>`,`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,...urls,`</urlset>`].join("\n"); return new Response(xml,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600"}})}}}});