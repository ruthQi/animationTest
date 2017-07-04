function findRad(e) {
   return e * (Math.PI / 180)
}
function pixiOptionsExtended() {
   PIXI.dontSayHello = !0, PIXI.MovingAlphaMaskFilter = function(e) {
      PIXI.AbstractFilter.call(this), this.passes = [this], e.baseTexture._powerOf2 = !0, this.uniforms = {
         mask: {
            type: "sampler2D",
            value: e
         },
         mapDimensions: {
            type: "2f",
            value: {
               x: 1,
               y: 5112
            }
         },
         dimensions: {
            type: "4fv",
            value: [0, 0, 0, 0]
         },
         offset: {
            type: "2f",
            value: {
               x: 0,
               y: 0
            }
         }
      }, e.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = e.width, this.uniforms.mask.value.y = e.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), e.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
   }, PIXI.MovingAlphaMaskFilter.prototype = Object.create(PIXI.AbstractFilter.prototype), PIXI.MovingAlphaMaskFilter.prototype.constructor = PIXI.MovingAlphaMaskFilter, PIXI.MovingAlphaMaskFilter.prototype.onTextureLoaded = function() {
      this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height, this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
   }, Object.defineProperty(PIXI.MovingAlphaMaskFilter.prototype, "map", {
      get: function() {
         return this.uniforms.mask.value
      },
      set: function(e) {
         this.uniforms.mask.value = e
      }
   }), Object.defineProperty(PIXI.MovingAlphaMaskFilter.prototype, "offset", {
      get: function() {
         return this.uniforms.offset.value
      },
      set: function(e) {
         this.uniforms.offset.value = e
      }
   })
}
function requestServe() {
   $.scrollTo("0px", 300, function() {
      1 === screenSize && ($(".mButton").removeClass("active"), $("nav").removeClass("active")), $(".overlaySp.requestIt").fadeIn("fast", function() {
         $("body").css("overflow", "hidden")
      })
   })
}
function appModal() {
   $.scrollTo("0px", 300, function() {
      1 === screenSize && ($(".mButton").removeClass("active"), $("nav").removeClass("active")), $(".overlaySp.appStore").fadeIn("fast", function() {
         $("body").css("overflow", "hidden")
      })
   })
}
function introToTop() {
   TweenLite.to(trackpad, 0, {
      value: 0,
      onComplete: onScrollComplete,
      ease: Sine.easeInOut
   })
}
function onScrollComplete() {
   trackpad.unlock()
}
function contactSuccess() {
   $("#contactFrm").fadeOut("slow", function() {
      $(this).replaceWith('<br><br><p class="formResponse">Thank You for Contacting Us.</p>').fadeIn(), l.stop()
   })
}
function contactFailure() {
   $(".errorBig").length > 0 ? $(".errorBig").fadeOut("slow", function() {
      $(this).remove(), $("#contactFrm").append('<p class="errorBig" class="formResponse">Oops, something went wrong. Please try again.</p>').fadeIn(), l.stop()
   }) : ($("#contactFrm").append('<p class="errorBig" class="formResponse">Oops, something went wrong. Please try again.</p>').fadeIn(), l.stop())
}
function watchVal() {
   $("input").ToggleInputValue(), $("textarea").ToggleInputValue()
}
function runGmap() {
   var e = "/",
      o = "all",
      i = document.getElementById("gmap");
   if (0 === screenSize) var t = new AmenityMap(i, all);
   else var t = new AmenityMap(i, all);
   t.init(), $("#clear_points").bind("click", function() {
      t.killMarker()
   }), $("select#mobileDrop").on("change", function() {
      switch ($("span.mobileMapSwitch").removeClass("private"), $("span.mobileMapSwitch").removeClass("commercial"), $("span.mobileMapSwitch").removeClass("public-depot"), this.value) {
      case "Residential":
         t.points = privateRes, $("span.mobileMapSwitch").addClass("private");
         break;
      case "Commercial":
         t.points = commercial, $("span.mobileMapSwitch").addClass("commercial");
         break;
      case "Public Depot":
         t.points = publicDepot, $("span.mobileMapSwitch").addClass("public-depot");
         break;
      case "All":
         t.points = all;
         break;
      default:
         t.points = all
      }
      t.killMarker(), t.setPoints()
   }), $(".amenitybutton").on("click", function() {
      $(".current").removeClass("current"), $(this).addClass("current"), "#all" !== $(this).attr("href") ? ($("ul.amenities li span").removeClass("active"), $(this).parent().find("span").addClass("active")) : $("ul.amenities li span").addClass("active");
      var e = "#arrow_" + $(this).attr("id");
      switch (t.killMarker(), o = $(this).attr("href")) {
      case "#private":
         t.points = privateRes;
         break;
      case "#commercial":
         t.points = commercial;
         break;
      case "#public-depot":
         t.points = publicDepot;
         break;
      case "#all":
         t.points = all;
         break;
      default:
         t.points = all
      }
      t.setPoints(), iOS === !1 && $.scrollTo(".aMap", 300, {
         offset: -100
      })
   })
}
function AmenityMap(e, o) {
   this.map_div = e, this.initial_latlng = new google.maps.LatLng(43.653226, -79.383184), this.map, this.points = o, this.marker_array = [], this.ibArray = [], this.ibCount = 0
}
function discoverHash() {
   "#things" === location.hash ? 0 === screenSize ? $.scrollTo(".scOne", 300, {
      offset: -60
   }) : $.scrollTo(".scOne", 300, {
      offset: -138
   }) : "#whyalfred" === location.hash ? $.scrollTo(".scTwo", 500, {
      offset: 1
   }) : "#pricing" === location.hash ? 0 === screenSize ? $.scrollTo(".scThree", 600, {
      offset: 1
   }) : $.scrollTo(".scThree", 600, {
      offset: -220
   }) : "#works" === location.hash ? 0 === screenSize ? $.scrollTo(".scFour", 600, {
      offset: -70
   }) : $.scrollTo(".scFour", 600, {
      offset: -95
   }) : "#customize" === location.hash ? 0 === screenSize ? $.scrollTo(".scFive", 600, {
      offset: 1
   }) : $.scrollTo(".scFive", 600, {
      offset: -220
   }) : "#concierge" === location.hash ? 0 === screenSize ? $.scrollTo(".scSix", 600, {
      offset: 1
   }) : $.scrollTo(".scSix", 600, {
      offset: -234
   }) : "#get" === location.hash && requestServe()
}
function photoGallery() {
   if (0 !== $(".gallery").length) {
      $(".gallery dl.gallery-item:first-child").css("display", "block");
      var e = [],
         o = 0,
         i = 0;
      $(".gallery dl.gallery-item dt a").each(function() {
         e[o] = $(this).attr("href"), o++
      });
      var t = '<h5 class="alternate galleryNavi "><a class="galActive " href="' + e[0] + '">1</a></h5>';
      for ($(".galleryNavTitle").append(t), i = 1; i < e.length; i++) $(".galleryNavTitle").append('<h5 class="alternate galleryNavi "><a href="' + e[i] + '">' + (i + 1) + "</a></h5>");
      $(".galleryNavi a").click(function(e) {
         e.preventDefault(), $(".galleryNavi a").removeClass("galActive"), $(this).addClass("galActive");
         var o = $(".gallery").height();
         $(".gallery").css("height", o + "px");
         var i = '<a href="' + $(this).attr("href") + '"><img src="' + $(this).attr("href") + '" class="attachment-full"></a>';
         $(".gallery dl.gallery-item:first-child").fadeOut("fast", function() {
            $(".gallery dl.gallery-item:first-child dt a").remove(), o = $(".gallery dl.gallery-item:first-child").height() + 94, $(".gallery").css("height", o), $(".gallery dl.gallery-item:first-child dt").append(i), $(".gallery dl.gallery-item:first-child").fadeIn()
         })
      })
   }
}
function loadTweets() {
   $(".twitterdiv").forthebirds({
      loadtext: "Loading Tweets...",
      transition: "fade",
      timer: "10000",
      date: "true",
      datelocation: "howLong",
      fetch: ftbAmount,
      count: "1",
      avatar: "false",
      avatarlocation: "false",
      user: "alfredservice"
   })
}
function saveSpace() {
   0 === $(".pageWrap.intro").length && (void 0 !== document.ontouchmove ? (document.ontouchstart = function(e) {
      lastScroll = e.touches[0].clientY
   }, document.ontouchmove = function(e) {
      var o = e.touches[0].clientY;
      $(".mButton").hasClass("active") === !1 && (o > lastScroll ? 1 === lastDirect && (lastDirect = 0, timeUp.seek(0).play()) : 0 === lastDirect && (lastDirect = 1, timeDown.seek(0).play()))
   }) : $(window).scroll(function() {
      var e = $(this).scrollTop();
      $(".mButton").hasClass("active") === !1 && (e > lastScroll ? 0 === lastDirect && (lastDirect = 1, timeDown.seek(0).play()) : 1 === lastDirect && (lastDirect = 0, timeUp.seek(0).play())), lastScroll = e - 2
   }))
}
function loadingDone() {
   var e = .6,
      o = new TimelineMax({
         paused: !0,
         onComplete: function() {
            $(".closedBag").remove(), trackpad.unlock()
         }
      });
   $(".message").removeClass("anims"), o.to(".loader", 1, {
      opacity: 0
   }), o.to(".moveLeft", e, {
      x: 0
   }), o.to(".loadEnd", e, {
      opacity: 1,
      x: 0
   }, "-=0.6"), o.to(".footRightLoad", e, {
      y: 0
   }, "-=1.2"), o.to(".closedBag", 1.1, {
      opacity: 0
   }), o.to("canvas.pixi", .6, {
      opacity: 1
   }, "-=1.1"), o.play()
}
function loadAsset() {
   winDimension = dimensions(), assetWrap = new PIXI.DisplayObjectContainer, assetWrap.x = winDimension.width / 2, assetWrap.y = 0, backgroundWrap = new PIXI.DisplayObjectContainer, backgroundWrap.x = 0, backgroundWrap.y = 0, spriteWrap = new PIXI.DisplayObjectContainer, spriteWrap.x = 0, spriteWrap.y = 0;
   var e = 0,
      o = 0,
      i, t, a, r = ajaxUrl + "/img/rube/pixi/";
   1 === retina && (i = ["alfredhashx1_0.json", "alfredhashx1_1.json", "alfredhashx1_2.json", "alfredhashx1_3.json", "alfredhashx1_4.json", "alfredhashx1_5.json", "alfredhashx1_6.json", "alfredhashx1_7.json", "alfredhashx1_8.json", "alfredhashx1_9.json"], t = ["gif_0.json", "gif_1.json", "gif_2.json", "gif_3.json", "gif_4.json", "gif_5.json", "gif_6.json", "gif_7.json", "gif_8.json", "gif_9.json", "gif_10.json"], a = r + "extras/");
   var n = ["cloudsOne.png", "cloudsTwo.png", "cloudsThree.png", "cloudsFour.png", "cloudsFive.png", "hillsOne.png", "hillsTwo.png", "hillsThree.png", "hillsFour.png", "hillsFive.png", "treesOne.png", "treesTwo.png", "cottage.png", "caveFour.png", "caveThree.png", "caveTwo.png", "caveOne.png", "pondEdge.png", "waterOne.png", "waterTwo.png", "waterThree.png", "waterFour.png", "waterFive.png", "waterSix.png"],
      p = ["belt_shadow.png", "belt_vertical.png", "burners_01.png", "burners_02.png", "burners_03.png", "burners_04.png", "burners_05.png", "burners_06.png", "burners_07.png", "burners_08.png", "burners_09.png", "burners_10.png", "burners_11.png", "burners_12.png", "zOne.png", "zTwo.png", "zThree.png", "arrow_yellow.png", "arrow_white.png", "arrow_blue.png", "introArrow.png", "wind_turbine.png", "wind_palm.png", "exclaim_yellow.png", "exclaim_pink_left.png", "exclaim_pink_right.png"];
   spriteWrap.addChild(rectangle(-1 * (winDimension.width / 2), 1775, winDimension.width, 33, 14145495, 16777215, 0, "lockerBarOne", 2)), spriteWrap.addChild(rectangle(-1 * (winDimension.width / 2), 11401, winDimension.width, 33, 14145495, 16777215, 0, "lockerBarTwo", 2)), assetWrap.addChild(rectangle(-1 * (winDimension.width / 2), 2420, winDimension.width, 990, 16777214, 16777214, 0, "cloudBg", 0)), assetWrap.addChild(rectangle(-1 * (winDimension.width / 2), 4170, winDimension.width, 1020, 2967328, 16777215, 0, "hillsBg", 0)), assetWrap.addChild(rectangle(-1 * (winDimension.width / 2), 5950, winDimension.width, 1e3, 11959625, 16777215, 0, "cottageBg", 0)), assetWrap.addChild(rectangle(-1 * (winDimension.width / 2), 7100, winDimension.width, 2600, 5789786, 16777215, 0, "caveBg", 0)), box.sunTile = new PIXI.TilingSprite(PIXI.Texture.fromImage(a + "sunTile.png"), winDimension.width, 293), box.sunTile.position.x = -1 * (winDimension.width / 2), box.sunTile.position.y = 1808, assetWrap.addChild(box.sunTile);
   for (var s = 0, d = p.length; d > s; s++) {
      var l = p[s].replace(".png", "");
      sprite[l] = new PIXI.Sprite(PIXI.Texture.fromImage(a + p[s])), assetPositions.hasOwnProperty(p[s]) ? (sprite[l].position.x = assetPositions[p[s]].x, sprite[l].position.y = assetPositions[p[s]].y, sprite[l].z = assetPositions[p[s]].z, sprite[l].visible = assetPositions[p[s]].visible, sprite[l].alpha = assetPositions[p[s]].alpha) : outlie[l].alpha = 0, spriteWrap.addChild(sprite[l])
   }
   for (var w = 0, x = n.length; x > w; w++) outlie[n[w]] = new PIXI.Sprite(PIXI.Texture.fromImage(a + n[w])), assetPositions.hasOwnProperty(n[w]) ? (outlie[n[w]].width = winDimension.width, outlie[n[w]].position.x = -1 * (winDimension.width / 2), outlie[n[w]].position.y = assetPositions[n[w]].y, outlie[n[w]].visible = !1) : outlie[n[w]].alpha = 0, backgroundWrap.addChild(outlie[n[w]]);
   assetWrap.addChild(backgroundWrap);
   for (var h = 0, c = t.length; c > h; h++) {
      var T = new PIXI.SpriteSheetLoader(r + t[h], !1);
      T.on("loaded", function(e) {
         var i = r + e.content.content.json.meta.image;
         for (var t in e.content.content.json.frames) gifSprites[t] = new PIXI.Texture.fromFrame(t), o++, 86 === o && (gifSprites["source_00.jpg"] = gifSprites["source_01.jpg"], gifSprite = new PIXI.Sprite(gifSprites["source_01.jpg"]), gifSprite.position.y = 5922, gifSprite.position.x = -440, gifSprite.width = 360, gifSprite.height = 207, gifSprite.z = 2, gifSprite.alpha = 0, spriteWrap.addChild(gifSprite))
      }), T.load()
   }
   for (var _ = 0, M = i.length; M > _; _++) {
      var u = new PIXI.SpriteSheetLoader(r + i[_], !1);
      u.on("loaded", function(o) {
         var i = r + o.content.content.json.meta.image;
         for (var t in o.content.content.json.frames) {
            var n = new PIXI.Texture.fromFrame(t);
            if (sprite[t.replace(".png", "")] = new PIXI.Sprite(n), assetPositions.hasOwnProperty(t) && (sprite[t.replace(".png", "")].position.x = assetPositions[t].x, sprite[t.replace(".png", "")].position.y = assetPositions[t].y, sprite[t.replace(".png", "")].z = assetPositions[t].z, assetPositions[t].visible === !1 && (sprite[t.replace(".png", "")].visible = !1), 0 === assetPositions[t].alpha && (sprite[t.replace(".png", "")].alpha = 0), 1 == assetPositions[t].pivot && (sprite[t.replace(".png", "")].pivot.set(sprite[t.replace(".png", "")].width / 2, sprite[t.replace(".png", "")].height / 2), sprite[t.replace(".png", "")].position.x = assetPositions[t].x + sprite[t.replace(".png", "")].width / 2, sprite[t.replace(".png", "")].position.y = assetPositions[t].y + sprite[t.replace(".png", "")].height / 2)), spriteWrap.addChild(sprite[t.replace(".png", "")]), e++, 116 === e) {
               assetWrap.addChild(spriteWrap), sprite.arrow_services = new PIXI.Sprite(sprite.arrow_white.texture), sprite.arrow_services.position.x = assetPositions["arrow_services.png"].x, sprite.arrow_services.position.y = assetPositions["arrow_services.png"].y, sprite.arrow_services.z = assetPositions["arrow_services.png"].z, sprite.arrow_services.alpha = assetPositions["arrow_services.png"].alpha, spriteWrap.addChild(sprite.arrow_services), sprite.arrow_location = new PIXI.Sprite(sprite.arrow_white.texture), sprite.arrow_location.position.x = assetPositions["arrow_location.png"].x, sprite.arrow_location.position.y = assetPositions["arrow_location.png"].y, sprite.arrow_location.z = assetPositions["arrow_location.png"].z, sprite.arrow_location.alpha = assetPositions["arrow_location.png"].alpha, spriteWrap.addChild(sprite.arrow_location);
               var p = new TimelineMax({
                  repeat: -1,
                  paused: !0,
                  onComplete: function() {
                     this.restart().pause()
                  }
               }).add(TweenMax.to(sprite.arrow_services.position, .3, {
                  x: sprite.arrow_services.position.x + 10,
                  ease: Power1.easeInOut
               })).add(TweenMax.to(sprite.arrow_services.position, .4, {
                  x: sprite.arrow_services.position.x,
                  ease: Power1.easeInOut
               })),
                  s = new TimelineMax({
                     repeat: -1,
                     paused: !0,
                     onComplete: function() {
                        this.restart().pause()
                     }
                  }).add(TweenMax.to(sprite.arrow_blue.position, .3, {
                     x: sprite.arrow_blue.position.x + 10,
                     ease: Power1.easeInOut
                  })).add(TweenMax.to(sprite.arrow_blue.position, .4, {
                     x: sprite.arrow_blue.position.x,
                     ease: Power1.easeInOut
                  })),
                  d = new TimelineMax({
                     repeat: -1,
                     paused: !0,
                     onComplete: function() {
                        this.restart().pause()
                     }
                  }).add(TweenMax.to(sprite.arrow_location.position, .3, {
                     x: sprite.arrow_location.position.x + 10,
                     ease: Power1.easeInOut
                  })).add(TweenMax.to(sprite.arrow_location.position, .4, {
                     x: sprite.arrow_location.position.x,
                     ease: Power1.easeInOut
                  })),
                  l = new TimelineMax({
                     repeat: -1,
                     paused: !0,
                     onComplete: function() {
                        this.restart().pause()
                     }
                  }).add(TweenMax.to(sprite.arrow_yellow.position, .3, {
                     x: sprite.arrow_yellow.position.x + 10,
                     ease: Power1.easeInOut
                  })).add(TweenMax.to(sprite.arrow_yellow.position, .4, {
                     x: sprite.arrow_yellow.position.x,
                     ease: Power1.easeInOut
                  })),
                  w = new TimelineMax({
                     repeat: -1,
                     paused: !0,
                     onComplete: function() {
                        this.restart().pause()
                     }
                  }).add(TweenMax.to(sprite.arrow_white.position, .3, {
                     x: sprite.arrow_white.position.x + 10,
                     ease: Power1.easeInOut
                  })).add(TweenMax.to(sprite.arrow_white.position, .4, {
                     x: sprite.arrow_white.position.x,
                     ease: Power1.easeInOut
                  }));
               sprite.textServices = new PIXI.Text("SERVICES", {
                  font: "41px novecento_wide_bookbold",
                  fill: "#F5F6F6"
               }), sprite.textServices.position.y = 1644, sprite.textServices.position.x = 220, sprite.textServices.z = 0, sprite.textServices.interactive = !0, spriteWrap.addChild(sprite.textServices), sprite.textServices.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock(), p.repeat(-1).play()
               }, sprite.textServices.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock(), p.repeat(1)
               }, sprite.textServices.click = function(e) {
                  return window.location.href = "http://alfredservice.com/services/", !1
               }, sprite.textWorks = new PIXI.Text("HOW IT\nWORKS", {
                  font: "41px novecento_wide_bookbold",
                  fill: "#1FB3E6"
               }), sprite.textWorks.position.y = 2780, sprite.textWorks.position.x = -370, sprite.textWorks.z = 0, sprite.textWorks.interactive = !0, spriteWrap.addChild(sprite.textWorks), sprite.textWorks.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock(), s.repeat(-1).play()
               }, sprite.textWorks.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock(), s.repeat(1)
               }, sprite.textWorks.click = function(e) {
                  return window.location.href = "http://alfredservice.com/how/", !1
               }, sprite.textLocations = new PIXI.Text("LOCATIONS", {
                  font: "41px novecento_wide_bookbold",
                  fill: "#F5F6F6"
               }), sprite.textLocations.position.y = 3502, sprite.textLocations.position.x = -442, sprite.textLocations.z = 0, sprite.textLocations.interactive = !0, spriteWrap.addChild(sprite.textLocations), sprite.textLocations.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock(), d.repeat(-1).play()
               }, sprite.textLocations.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock(), d.repeat(1)
               }, sprite.textLocations.click = function(e) {
                  return window.location.href = "http://alfredservice.com/locations/", !1
               }, sprite.textFaq = new PIXI.Text("FAQ", {
                  font: "41px novecento_wide_bookbold",
                  fill: "#FCDE2D"
               }), sprite.textFaq.position.y = 6366, sprite.textFaq.position.x = 248, sprite.textFaq.z = 0, sprite.textFaq.interactive = !0, spriteWrap.addChild(sprite.textFaq), sprite.textFaq.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock(), l.repeat(-1).play()
               }, sprite.textFaq.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock(), l.repeat(1)
               }, sprite.textFaq.click = function(e) {
                  return window.location.href = "http://alfredservice.com/faq-page/", !1
               }, sprite.textBlog = new PIXI.Text("BLOG", {
                  font: "41px novecento_wide_bookbold",
                  fill: "#F5F6F6"
               }), sprite.textBlog.position.y = 8559, sprite.textBlog.position.x = -296, sprite.textBlog.z = 0, sprite.textBlog.interactive = !0, spriteWrap.addChild(sprite.textBlog), sprite.textBlog.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock(), w.repeat(-1).play()
               }, sprite.textBlog.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock(), w.repeat(1)
               }, sprite.textBlog.click = function(e) {
                  return window.location.href = "http://alfredservice.com/blog/", !1
               }, sprite.textConclusion = new PIXI.Text("TADA!", {
                  font: "41px novecento_wide_bookbold",
                  fill: "#FCDE2D"
               }), sprite.textConclusion.position.y = 11540, sprite.textConclusion.position.x = 222, sprite.textConclusion.z = 0, sprite.textConclusion.interactive = !0, spriteWrap.addChild(sprite.textConclusion), sprite.textConclusion.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock()
               }, sprite.textConclusion.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock()
               }, sprite.textConclusion.click = function(e) {
                  return window.location.href = "https://myaccount.alfredservice.com/register", !1
               }, sprite.textConclusionTwo = new PIXI.Text("It's simple. Try it today.", {
                  font: "16px sanchez_regularregular",
                  fill: "#FCDE2D"
               }), sprite.textConclusionTwo.position.y = 11580, sprite.textConclusionTwo.position.x = 223, sprite.textConclusionTwo.z = 0, sprite.textConclusionTwo.interactive = !0, spriteWrap.addChild(sprite.textConclusionTwo), sprite.textConclusion.alpha = 0, sprite.textConclusionTwo.alpha = 0, sprite.textConclusionTwo.mouseover = function(e) {
                  document.body.style.cursor = "pointer", trackpad.lock()
               }, sprite.textConclusionTwo.mouseout = function(e) {
                  document.body.style.cursor = "auto", trackpad.unlock()
               }, sprite.textConclusionTwo.click = function(e) {
                  return window.location.href = "https://myaccount.alfredservice.com/register", !1
               }, sprite.savedTank = new PIXI.Sprite(sprite.tank_nofront.texture), sprite.savedTank.alpha = 0, sprite.savedTank.position.x = -384, sprite.savedTank.position.y = 6633, assetWrap.addChild(sprite.savedTank), sprite.ball1Last = new PIXI.Sprite(sprite.ball1.texture), sprite.ball1LastShader = new PIXI.Sprite(sprite.ball1_shader.texture), sprite.ball1Last.alpha = assetPositions["ball1Last.png"].alpha, sprite.ball1LastShader.alpha = assetPositions["ball1LastShader.png"].alpha, sprite.ball1Last.position.x = assetPositions["ball1Last.png"].x, sprite.ball1LastShader.position.x = assetPositions["ball1LastShader.png"].x, sprite.ball1Last.position.y = assetPositions["ball1Last.png"].y, sprite.ball1LastShader.position.y = assetPositions["ball1LastShader.png"].y, sprite.ball1Last.z = assetPositions["ball1Last.png"].z, sprite.ball1LastShader.z = assetPositions["ball1LastShader.png"].z, spriteWrap.addChild(sprite.ball1Last), spriteWrap.addChild(sprite.ball1LastShader), sprite.wheelsBackTwo = new PIXI.Sprite(sprite.wheelsBack.texture), sprite.wheelsBackTwo.alpha = assetPositions["wheelsBackTwo.png"].alpha, sprite.wheelsBackTwo.position.x = assetPositions["wheelsBackTwo.png"].x, sprite.wheelsBackTwo.position.y = assetPositions["wheelsBackTwo.png"].y, sprite.wheelsBackTwo.z = assetPositions["wheelsBackTwo.png"].z, spriteWrap.addChild(sprite.wheelsBackTwo), sprite.wheelShaderTwo = new PIXI.Sprite(sprite.wheelShader.texture), sprite.wheelShaderTwo.alpha = assetPositions["wheelShaderTwo.png"].alpha, sprite.wheelShaderTwo.position.x = assetPositions["wheelShaderTwo.png"].x, sprite.wheelShaderTwo.position.y = assetPositions["wheelShaderTwo.png"].y, sprite.wheelShaderTwo.z = assetPositions["wheelShaderTwo.png"].z, spriteWrap.addChild(sprite.wheelShaderTwo), sprite.wheelFrontTwo = new PIXI.Sprite(sprite.wheelFront.texture), sprite.wheelFrontTwo.alpha = assetPositions["wheelFrontTwo.png"].alpha, sprite.wheelFrontTwo.position.x = assetPositions["wheelFrontTwo.png"].x, sprite.wheelFrontTwo.position.y = assetPositions["wheelFrontTwo.png"].y, sprite.wheelFrontTwo.z = assetPositions["wheelFrontTwo.png"].z, spriteWrap.addChild(sprite.wheelFrontTwo), sprite.wheelTwoMask = new PIXI.Graphics, spriteWrap.addChild(sprite.wheelTwoMask), sprite.wheelTwoMask.position.x = sprite.wheelsBackTwo.position.x - 121, sprite.wheelTwoMask.position.y = sprite.wheelsBackTwo.position.y - 171, sprite.wheelTwoMask.z = sprite.wheelsBackTwo.z, sprite.wheelTwoMask.lineStyle(0), sprite.wheelTwoMask.beginFill(16777215, 1), sprite.wheelTwoMask.drawRect(9, 58, 228, 227), sprite.wheelTwoMask.endFill(), sprite.wheelTwoShaderMask = new PIXI.Graphics, spriteWrap.addChild(sprite.wheelTwoShaderMask), sprite.wheelTwoShaderMask.position.x = sprite.wheelShaderTwo.position.x + 320, sprite.wheelTwoShaderMask.position.y = sprite.wheelShaderTwo.position.y, sprite.wheelTwoShaderMask.z = sprite.wheelShaderTwo.z, sprite.wheelTwoShaderMask.lineStyle(0), sprite.wheelTwoShaderMask.beginFill(16777215, 1), sprite.wheelTwoShaderMask.drawRect(0, 0, 306, 341), sprite.wheelTwoShaderMask.endFill(), sprite.wheelsBackTwo.mask = sprite.wheelTwoMask, sprite.wheelShaderTwo.mask = sprite.wheelTwoShaderMask, sprite.wheelFrontTwo.mask = sprite.wheelTwoMask, sprite.wheelOneMask = new PIXI.Graphics, spriteWrap.addChild(sprite.wheelOneMask), sprite.wheelOneMask.position.x = sprite.wheelFront.position.x - 117, sprite.wheelOneMask.position.y = sprite.wheelFront.position.y - 111, sprite.wheelOneMask.z = sprite.wheelsBack.z, sprite.wheelOneMask.lineStyle(0), sprite.wheelOneMask.beginFill(16777215, 1), sprite.wheelOneMask.drawRect(0, 0, 238, 228), sprite.wheelOneMask.endFill(), sprite.wheelOneShadowMask = new PIXI.Graphics, spriteWrap.addChild(sprite.wheelOneShadowMask), sprite.wheelOneShadowMask.position.x = sprite.wheelShader.position.x, sprite.wheelOneShadowMask.position.y = sprite.wheelShader.position.y, sprite.wheelOneShadowMask.z = sprite.wheelShader.z, sprite.wheelOneShadowMask.lineStyle(0), sprite.wheelOneShadowMask.beginFill(16777215, 1), sprite.wheelOneShadowMask.drawRect(0, 0, 316, 341), sprite.wheelOneShadowMask.endFill(), sprite.wheelsBack.mask = sprite.wheelOneMask, sprite.wheelShader.mask = sprite.wheelOneShadowMask, sprite.wheelFront.mask = sprite.wheelOneMask, sprite.wheel2_3_cap2 = new PIXI.Sprite(sprite.wheel2_3_cap.texture), sprite.wheel2_3_cap2.alpha = assetPositions["wheel2_3_cap2.png"].alpha, sprite.wheel2_3_cap2.position.x = assetPositions["wheel2_3_cap2.png"].x, sprite.wheel2_3_cap2.position.y = assetPositions["wheel2_3_cap2.png"].y, sprite.wheel2_3_cap2.z = assetPositions["wheel2_3_cap2.png"].z, spriteWrap.addChild(sprite.wheel2_3_cap2);
               var x = PIXI.Texture.fromImage(a + "windmask.jpg");
               sprite.windMaskFilter = new PIXI.MovingAlphaMaskFilter(x), sprite.wind_turbine.filters = [sprite.windMaskFilter];
               var h = PIXI.Texture.fromImage(a + "windmaskTwo.jpg");
               sprite.windMaskFilterTwo = new PIXI.MovingAlphaMaskFilter(h), sprite.wind_palm.filters = [sprite.windMaskFilterTwo], tearsWrap = new PIXI.DisplayObjectContainer;
               for (var c = 0, T = ["drop_blue.png", "drop_yellow.png", "drop_pink.png"], _ = 1; 57 > _; _++) dropSprite["drop_" + _] = new PIXI.Sprite(PIXI.Texture.fromFrame(T[c])), dropSprite["drop_" + _].alpha = 0, _ % 2 == 0 ? (dropSprite["drop_" + _].position.x = assetPositions["drop_yellow.png"].x, dropSprite["drop_" + _].position.y = assetPositions["drop_yellow.png"].y) : _ % 2 == 1 && (dropSprite["drop_" + _].position.x = assetPositions["drop_pink.png"].x, dropSprite["drop_" + _].position.y = assetPositions["drop_pink.png"].y), c++, assetWrap.addChild(dropSprite["drop_" + _]), 3 == c && (c = 0), 55 == _ && 0 === loadingCheck && (loadingCheck = 1, loadingDone());
               resizeIntro(), depthOrder(), layAction()
            }
         }
      }), u.load()
   }
   stage.addChild(assetWrap)
}
function depthOrder() {
   function e(e, o) {
      return e.z < o.z ? -1 : e.z > o.z ? 1 : 0
   }
   spriteWrap.children.sort(e)
}
function distanceY(e) {
   return -14e3 * e / 5e3
}
function resizeLays() {
   var e = !0;
   void 0 !== birdFlyAnim && (birdFlyAnim.removeTween(!0), e = !1), void 0 !== lastShirtFallTween && lastShirtFallScene.removeTween(!0), void 0 !== introArrowAnimOne && introArrowAnimOne.removeTween(!0), void 0 !== introArrowAnimTwo && introArrowAnimTwo.removeTween(!0), $(window).height() < 850 ? (sprite.introArrow.position.x = 136, sprite.introArrow.position.y = 430) : (sprite.introArrow.position.x = assetPositions["introArrow.png"].x, sprite.introArrow.position.y = assetPositions["introArrow.png"].y);
   var o = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.introArrow.position, 1.3, {
      y: sprite.introArrow.position.y + 20,
      ease: Bounce.easeOut
   })]).add([TweenMax.to(sprite.introArrow.position, .4, {
      y: sprite.introArrow.position.y,
      ease: Power1.easeInOut
   })]),
      i = (new TimelineMax).add(TweenMax.to(sprite.introArrow.position, .1, {
         y: sprite.introArrow.position.y + 20,
         ease: Linear.easeNone
      })).add([TweenMax.to(sprite.introArrow.position, 1, {
         y: sprite.introArrow.position.y + 470,
         ease: Power0.easeOut
      }), TweenMax.to(sprite.introArrow, 1, {
         alpha: 0
      })]);
   birdFlyTween = (new TimelineMax).add([TweenMax.to(sprite.birdRight_down, .01, {
      alpha: 0
   }), TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y,
      x: 0 * birdRight - 390,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y,
      x: 0 * birdRight - 390,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.bird_launch, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y - 30,
      x: .15 * birdRight - 390,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y - 30,
      x: .15 * birdRight - 390,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdRight_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y + 80,
      x: .3 * birdRight - 390,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y + 80,
      x: .3 * birdRight - 390,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdRight_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y + 50,
      x: .5 * birdRight - 390,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y + 50,
      x: .5 * birdRight - 390,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdRight_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y + 120,
      x: .7 * birdRight - 390,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y + 120,
      x: .7 * birdRight - 390,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdRight_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y + 90,
      x: .9 * birdRight - 390,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y + 90,
      x: .9 * birdRight - 390,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdRight_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y + 160,
      x: birdRight - 240,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y + 160,
      x: birdRight - 240,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdRight_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdRight_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdRight_down.position, 1, {
      y: assetPositions["birdRight_down.png"].y + 150,
      x: birdRight,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_up.position, 1, {
      y: assetPositions["birdRight_up.png"].y + 150,
      x: birdRight,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeft_down.position, 1, {
      y: assetPositions["birdLeft_down.png"].y + 90,
      x: .7 * birdRight,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeft_up.position, 1, {
      y: assetPositions["birdLeft_up.png"].y + 90,
      x: .7 * birdRight,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeftNone_down.position, 1, {
      y: assetPositions["birdLeftNone_down.png"].y + 105,
      x: -420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeftNone_up.position, 1, {
      y: assetPositions["birdLeftNone_up.png"].y + 105,
      x: -420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdRight_down, .01, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeft_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeft_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeft_down.position, 1, {
      y: assetPositions["birdLeft_down.png"].y + 20,
      x: .5 * birdRight,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeft_up.position, 1, {
      y: assetPositions["birdLeft_up.png"].y + 20,
      x: .5 * birdRight,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeft_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeft_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeft_down.position, 1, {
      y: assetPositions["birdLeft_down.png"].y + 90,
      x: .3 * birdRight,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeft_up.position, 1, {
      y: assetPositions["birdLeft_up.png"].y + 90,
      x: .3 * birdRight,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeft_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeft_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeft_down.position, 1, {
      y: assetPositions["birdLeft_down.png"].y + 60,
      x: 0 * birdRight,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeft_up.position, 1, {
      y: assetPositions["birdLeft_up.png"].y + 60,
      x: 0 * birdRight,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeft_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeft_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeft_down.position, 1, {
      y: assetPositions["birdLeft_down.png"].y + 130,
      x: -210,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeft_up.position, 1, {
      y: assetPositions["birdLeft_up.png"].y + 130,
      x: -210,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeft_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeft_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeft_down.position, 1, {
      y: assetPositions["birdLeft_down.png"].y + 105,
      x: -420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeft_up.position, 1, {
      y: assetPositions["birdLeft_up.png"].y + 105,
      x: -420,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeftNone_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.note, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeft_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeftNone_down.position, 1, {
      y: assetPositions["birdLeftNone_down.png"].y + 85,
      x: .25 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeftNone_up.position, 1, {
      y: assetPositions["birdLeftNone_up.png"].y + 85,
      x: .25 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.note.position, 1, {
      y: assetPositions["note.png"].y + 107,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeftNone_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeftNone_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeftNone_down.position, 1, {
      y: assetPositions["birdLeftNone_down.png"].y + 50,
      x: .45 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeftNone_up.position, 1, {
      y: assetPositions["birdLeftNone_up.png"].y + 50,
      x: .45 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.note.position, 1, {
      y: assetPositions["note.png"].y + 214,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeftNone_up, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeftNone_down, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeftNone_down.position, 1, {
      y: assetPositions["birdLeftNone_down.png"].y + 60,
      x: .65 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeftNone_up.position, 1, {
      y: assetPositions["birdLeftNone_up.png"].y + 60,
      x: .65 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.note.position, 1, {
      y: assetPositions["note.png"].y + 323,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.birdLeftNone_down, .01, {
      alpha: 1
   }), TweenMax.to(sprite.birdLeftNone_up, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.birdLeftNone_down.position, 1, {
      y: assetPositions["birdLeftNone_down.png"].y + 55,
      x: .85 * birdLeft - 420,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.birdLeftNone_up.position, 1, {
      y: assetPositions["birdLeftNone_up.png"].y + 55,
      x: .85 * birdLeft - 420,
      ease: Linear.easeNone
   })]), lastShirtFallTween = (new TimelineMax).add(TweenMax.to(sprite.shirtSide.position, 1, {
      y: sprite.lockers.position.y + 100,
      ease: Power1.easeOut
   })), e === !0 ? (birdFlyAnim = new ScrollScene({
      duration: 750,
      offset: 680
   }).setTween(birdFlyTween).addTo(controller), lastShirtFallScene = new ScrollScene({
      duration: 900,
      offset: 6300
   }).setTween(lastShirtFallTween).addTo(controller), introArrowAnimOne = new ScrollScene({
      duration: 10,
      offset: -1
   }).setTween(o).addTo(controller), introArrowAnimTwo = new ScrollScene({
      duration: 120,
      offset: 1
   }).setTween(i).addTo(controller)) : (birdFlyAnim.setTween(birdFlyTween), birdFlyAnim.update(!0), lastShirtFallScene.setTween(lastShirtFallTween), lastShirtFallScene.update(!0), introArrowAnimOne.setTween(o), introArrowAnimOne.update(!0), introArrowAnimTwo.setTween(i), introArrowAnimTwo.update(!0))
}
function layAction() {
   new ScrollScene({
      duration: 20,
      offset: 10
   }).setTween(TweenMax.to($("footer.intro"), 1, {
      y: 170
   })).addTo(controller);
   var e = (new TimelineMax).add([TweenMax.to("header.intoR", 1.6, {
      y: -600
   })]).add([TweenMax.to("header.intoR", .01, {
      y: -900
   }), TweenMax.to(".authFn", .01, {
      y: 900,
      opacity: 0
   })]).add([TweenMax.to("nav", .01, {
      bottom: "0",
      top: "-60px"
   }), TweenMax.to(".menu-main-container", .01, {
      y: 900,
      opacity: 0
   }), TweenMax.to(".authFn a.returnToTop", .01, {
      display: "block"
   }), TweenMax.to(".authFn", .01, {
      width: "358px"
   }), TweenMax.to(".chromeframe", .01, {
      y: -40
   })]).add([TweenMax.to("nav", .5, {
      position: "fixed"
   }), TweenMax.to(".authFn", .01, {
      opacity: 1
   })]).add([TweenMax.to("nav", .2, {
      top: "0px"
   }), TweenMax.to(".upPage", .2, {
      x: -50,
      opacity: 1
   })]);
   new ScrollScene({
      offset: 10,
      duration: 200
   }).setTween(e).addTo(controller), new ScrollScene({
      duration: 1234,
      offset: 96
   }).addTo(controller).on("enter leave", function(e) {
      "enter" == e.type ? (outlie["cloudsOne.png"].visible = !0, outlie["cloudsTwo.png"].visible = !0, outlie["cloudsThree.png"].visible = !0, outlie["cloudsFour.png"].visible = !0, outlie["cloudsFive.png"].visible = !0) : (outlie["cloudsOne.png"].visible = !1, outlie["cloudsTwo.png"].visible = !1, outlie["cloudsThree.png"].visible = !1, outlie["cloudsFour.png"].visible = !1, outlie["cloudsFive.png"].visible = !1)
   }), new ScrollScene({
      duration: 2e3,
      offset: 540
   }).addTo(controller).on("enter leave", function(e) {
      "enter" == e.type ? (outlie["hillsOne.png"].visible = !0, outlie["hillsTwo.png"].visible = !0, outlie["hillsThree.png"].visible = !0, outlie["hillsFour.png"].visible = !0, outlie["hillsFive.png"].visible = !0) : (outlie["hillsOne.png"].visible = !1, outlie["hillsTwo.png"].visible = !1, outlie["hillsThree.png"].visible = !1, outlie["hillsFour.png"].visible = !1, outlie["hillsFive.png"].visible = !1)
   }), new ScrollScene({
      duration: 1470,
      offset: 1730
   }).addTo(controller).on("enter leave", function(e) {
      "enter" == e.type ? (outlie["treesOne.png"].visible = !0, outlie["treesTwo.png"].visible = !0) : (outlie["treesOne.png"].visible = !1, outlie["treesTwo.png"].visible = !1)
   }), new ScrollScene({
      duration: 1744,
      offset: 2160
   }).addTo(controller).on("enter leave", function(e) {
      outlie["cottage.png"].visible = "enter" == e.type ? !0 : !1
   }), new ScrollScene({
      duration: 1395,
      offset: 3375
   }).addTo(controller).on("enter leave", function(e) {
      "enter" == e.type ? (outlie["pondEdge.png"].visible = !0, outlie["caveOne.png"].visible = !0, outlie["caveTwo.png"].visible = !0, outlie["caveThree.png"].visible = !0, outlie["caveFour.png"].visible = !0) : (outlie["pondEdge.png"].visible = !1, outlie["caveOne.png"].visible = !1, outlie["caveTwo.png"].visible = !1, outlie["caveThree.png"].visible = !1, outlie["caveFour.png"].visible = !1)
   }), new ScrollScene({
      duration: 1233,
      offset: 5387
   }).addTo(controller).on("enter leave", function(e) {
      "enter" == e.type ? (outlie["waterOne.png"].visible = !0, outlie["waterTwo.png"].visible = !0, outlie["waterThree.png"].visible = !0, outlie["waterFour.png"].visible = !0, outlie["waterFive.png"].visible = !0, outlie["waterSix.png"].visible = !0) : (outlie["waterOne.png"].visible = !1, outlie["waterTwo.png"].visible = !1, outlie["waterThree.png"].visible = !1, outlie["waterFour.png"].visible = !1, outlie["waterFive.png"].visible = !1, outlie["waterSix.png"].visible = !1)
   });
   var o = (new TimelineMax).add(TweenMax.to(sprite.closedBag_01.position, 1, {
      y: 1418,
      ease: Power0.easeOut
   })),
      i = new ScrollScene({
         duration: 240,
         offset: 0
      }).setTween(o).addTo(controller),
      t = (new TimelineMax).add([TweenMax.to(sprite.openLocker_back_first, 1, {
         alpha: 0
      }), TweenMax.to(sprite.openLocker_fore_first, 1, {
         alpha: 0
      }), TweenMax.to(sprite.midLocker_back_first, 1, {
         alpha: 1
      }), TweenMax.to(sprite.midLocker_fore_first, 1, {
         alpha: 1
      })]),
      a = new ScrollScene({
         duration: 1,
         offset: 241
      }).setTween(t).addTo(controller),
      r = (new TimelineMax).add([TweenMax.to(sprite.closedBag_01, 1, {
         alpha: 0
      }), TweenMax.to(sprite.midLocker_back_first, 1, {
         alpha: 0
      }), TweenMax.to(sprite.midLocker_fore_first, 1, {
         alpha: 0
      })]),
      n = new ScrollScene({
         duration: 1,
         offset: 259
      }).setTween(r).addTo(controller),
      p = (new TimelineMax).add([TweenMax.to(sprite.trapdoorClosed, 1, {
         alpha: 0
      }), TweenMax.to(sprite.trapdoorMid, 1, {
         alpha: 1
      })]),
      s = new ScrollScene({
         duration: 1,
         offset: 380
      }).setTween(p).addTo(controller),
      d = (new TimelineMax).add([TweenMax.to(sprite.trapdoorMid, 1, {
         alpha: 0
      }), TweenMax.to(sprite.trapdoorOpen, 1, {
         alpha: 1
      })]),
      l = new ScrollScene({
         duration: 1,
         offset: 430
      }).setTween(d).addTo(controller),
      w = (new TimelineMax).add(TweenMax.to(sprite.closedBag_01_second.position, 2, {
         y: 3918
      })).add(TweenMax.to(sprite.closedBag_01_second, .1, {
         alpha: 0
      })),
      x = new ScrollScene({
         duration: 470,
         offset: 431
      }).setTween(w).addTo(controller);
   bellTween = new TimelineMax({
      repeat: 8,
      paused: !0
   }).add([TweenMax.to(sprite.exclaim_yellow, .1, {
      alpha: .4
   }, "0"), TweenMax.to(sprite.bell_mid, .1, {
      alpha: 0
   }, "0"), TweenMax.to(sprite.bell_right, .05, {
      alpha: 1
   }, "0")]).add([TweenMax.to(sprite.bell_right, .05, {
      alpha: 1
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .05, {
      alpha: .5
   }, "0")]).add([TweenMax.to(sprite.bell_right, .1, {
      alpha: 0
   }, "0"), TweenMax.to(sprite.bell_mid, .05, {
      alpha: 1
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .1, {
      alpha: .8
   }, "0")]).add([TweenMax.to(sprite.bell_mid, .05, {
      alpha: 1
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .05, {
      alpha: .9
   }, "0")]).add([TweenMax.to(sprite.bell_mid, .1, {
      alpha: 0
   }, "0"), TweenMax.to(sprite.bell_left, .05, {
      alpha: 1
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .05, {
      alpha: 1
   }, "0")]).add(TweenMax.to(sprite.bell_left, .05, {
      alpha: 1
   }, "0")).add([TweenMax.to(sprite.bell_left, .1, {
      alpha: 0
   }, "0"), TweenMax.to(sprite.bell_mid, .05, {
      alpha: 1
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .1, {
      alpha: .2
   }, "0")]).add([TweenMax.to(sprite.bell_mid, .05, {
      alpha: 1
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .05, {
      alpha: 0
   }, "0"), TweenMax.to(sprite.exclaim_yellow, .05, {
      alpha: 0
   }, "0")]), new ScrollScene({
      duration: 1.5,
      offset: 430
   }).addTo(controller).on("end", function(e) {
      "FORWARD" == e.scrollDirection && bellTween.restart()
   });
   var h = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.zThree, .4, {
      alpha: 1
   })]).add([TweenMax.to(sprite.zThree, .4, {
      alpha: 0
   }), TweenMax.to(sprite.zTwo, .4, {
      alpha: 1
   })]).add([TweenMax.to(sprite.zTwo, .4, {
      alpha: 0
   }), TweenMax.to(sprite.zOne, .4, {
      alpha: 1
   })]).add([TweenMax.to(sprite.zOne, .2, {
      alpha: 0
   })]);
   new ScrollScene({
      duration: 450,
      offset: 50
   }).setTween(h).addTo(controller);
   var c = (new TimelineMax).add([TweenMax.to(sprite.zOne, .01, {
      alpha: 0
   }), TweenMax.to(sprite.zTwo, .01, {
      alpha: 0
   }), TweenMax.to(sprite.zThree, .01, {
      alpha: 0
   })]);
   new ScrollScene({
      duration: 2,
      offset: 500
   }).setTween(c).addTo(controller);
   var T = (new TimelineMax).add([TweenMax.to(outlie["cloudsOne.png"].position, 1, {
      y: assetPositions["cloudsOne.png"].y + 95
   }), TweenMax.to(outlie["cloudsTwo.png"].position, 1, {
      y: assetPositions["cloudsTwo.png"].y + 85
   }), TweenMax.to(outlie["cloudsThree.png"].position, 1, {
      y: assetPositions["cloudsThree.png"].y + 90
   }), TweenMax.to(outlie["cloudsFour.png"].position, 1, {
      y: assetPositions["cloudsFour.png"].y + 150
   }), TweenMax.to(outlie["cloudsFive.png"].position, 1, {
      y: assetPositions["cloudsFive.png"].y + 220
   })]),
      _ = new ScrollScene({
         duration: 700,
         offset: 230
      }).setTween(T).addTo(controller),
      M = (new TimelineMax).add([TweenMax.to(sprite.bird_sleep, .01, {
         alpha: 0
      }), TweenMax.to(sprite.bird_wake, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_sleep, 1, {
         alpha: 0
      }), TweenMax.to(sprite.bird_wake, 1, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_wake, .01, {
         alpha: 0
      }), TweenMax.to(sprite.bird_sleep, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_wake, 1, {
         alpha: 0
      }), TweenMax.to(sprite.bird_sleep, 1, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_sleep, .01, {
         alpha: 0
      }), TweenMax.to(sprite.bird_wake, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_sleep, 1, {
         alpha: 0
      }), TweenMax.to(sprite.bird_wake, 1, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_wake, .01, {
         alpha: 0
      }), TweenMax.to(sprite.bird_launch, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.bird_wake, 1, {
         alpha: 0
      }), TweenMax.to(sprite.bird_launch, 1, {
         alpha: 1
      })]);
   new ScrollScene({
      duration: 160,
      offset: 500
   }).setTween(M).addTo(controller);
   var u = (new TimelineMax).add([TweenMax.to(sprite.ballSpring2, .01, {
      alpha: 1
   }), TweenMax.to(sprite.ball1, .01, {
      alpha: 1
   }), TweenMax.to(sprite.ball1_shader, .01, {
      alpha: 1
   }), TweenMax.to(sprite.ballSpring1, .02, {
      alpha: 0
   })]).add([TweenMax.to(sprite.ball1.position, 1, {
      bezier: {
         curviness: 2,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1.position.x + 205,
            y: sprite.ball1.position.y - 90
         }, {
            x: sprite.ball1.position.x + 355,
            y: sprite.ball1.position.y + 70
         }]
      },
      ease: Linear.easeNone
   }), TweenMax.to(sprite.ball1_shader.position, 1, {
      bezier: {
         curviness: 2,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1.position.x + 205,
            y: sprite.ball1.position.y - 90
         }, {
            x: sprite.ball1.position.x + 344,
            y: sprite.ball1.position.y + 70
         }]
      },
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.ball1.position, 1, {
      bezier: {
         curviness: 1,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1.position.x + 200,
            y: sprite.ball1.position.y + 100
         }, {
            x: sprite.ball1.position.x + 100,
            y: sprite.ball1.position.y + 200
         }]
      },
      ease: Linear.easeNone
   }), TweenMax.to(sprite.ball1_shader.position, 1, {
      bezier: {
         curviness: 1,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1_shader.position.x + 200,
            y: sprite.ball1_shader.position.y + 100
         }, {
            x: sprite.ball1_shader.position.x + 100,
            y: sprite.ball1_shader.position.y + 200
         }]
      },
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.ball1.position, 1, {
      bezier: {
         curviness: 1,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1.position.x + 40,
            y: sprite.ball1.position.y + 400
         }, {
            x: sprite.ball1.position.x,
            y: sprite.ball1.position.y + 1400
         }]
      },
      alpha: 0,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.ball1_shader.position, 1, {
      bezier: {
         curviness: 1,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1_shader.position.x + 40,
            y: sprite.ball1_shader.position.y + 400
         }, {
            x: sprite.ball1_shader.position.x,
            y: sprite.ball1_shader.position.y + 1400
         }]
      },
      alpha: 0,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.ball1, .01, {
      alpha: 0
   }), TweenMax.to(sprite.ball1_shader, .01, {
      alpha: 0
   })]),
      y = new ScrollScene({
         duration: 400,
         offset: 1383
      }).setTween(u).addTo(controller),
      S = (new TimelineMax).add([TweenMax.to(sprite.lever_closed, .02, {
         alpha: 0
      }), TweenMax.to(sprite.lever_half, .01, {
         alpha: 1
      }), TweenMax.to(sprite.van, 1, {
         x: sprite.van.position.x + 30,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.van_shader, 1, {
         x: sprite.van_shader.position.x + 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.lever_half, .02, {
         alpha: 0
      }), TweenMax.to(sprite.lever_open, .01, {
         alpha: 1
      }), TweenMax.to(sprite.van, 3, {
         x: sprite.van.position.x + 376,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.van_shader, 3, {
         x: sprite.van_shader.position.x + 376,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.lever_open, .02, {
         alpha: 0
      }), TweenMax.to(sprite.lever_closed, .01, {
         alpha: 1
      }), TweenMax.to(sprite.van, 4, {
         x: sprite.van.position.x + 900,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.van_shader, 4, {
         x: sprite.van_shader.position.x + 900,
         ease: Linear.easeNone
      })]),
      g = new ScrollScene({
         duration: 600,
         offset: 1518
      }).setTween(S).addTo(controller),
      b = (new TimelineMax).add([TweenMax.to(sprite.exclaim_pink_left, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.exclaim_pink_left, .5, {
         alpha: 1
      }), TweenMax.to(sprite.exclaim_pink_left, .5, {
         x: sprite.exclaim_pink_left.position.x - 10,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.exclaim_pink_left, 1, {
         alpha: 0
      }), TweenMax.to(sprite.exclaim_pink_left, 1, {
         x: sprite.exclaim_pink_left.position.x - 30,
         ease: Linear.easeNone
      })]),
      f = new ScrollScene({
         duration: 164,
         offset: 1516
      }).setTween(b).addTo(controller),
      m = (new TimelineMax).add([TweenMax.to(sprite.exclaim_pink_right, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.exclaim_pink_right, .5, {
         alpha: 1
      }), TweenMax.to(sprite.exclaim_pink_right, .5, {
         x: sprite.exclaim_pink_right.position.x + 25,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.exclaim_pink_right, 1, {
         alpha: 0
      }), TweenMax.to(sprite.exclaim_pink_right, 1, {
         x: sprite.exclaim_pink_right.position.x + 60,
         ease: Linear.easeNone
      })]),
      v = new ScrollScene({
         duration: 196,
         offset: 2304
      }).setTween(m).addTo(controller),
      k = (new TimelineMax).add([TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-540)
      }), TweenMax.to(sprite.ball2.position, 1, {
         x: sprite.ball2.position.x - 255,
         y: sprite.ball2.position.y + 49,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         x: sprite.ball2_shader.position.x - 255,
         y: sprite.ball2_shader.position.y + 49,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.ball2.position, 1, {
         bezier: {
            curviness: 1,
            autoRotate: ["x", "y", "rotation", 0, !0],
            timeResolution: 1,
            values: [{
               x: sprite.ball2.position.x - 280,
               y: sprite.ball2.position.y + 73
            }, {
               x: sprite.ball2.position.x - 290,
               y: sprite.ball2.position.y + 196
            }]
         },
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         bezier: {
            curviness: 1,
            autoRotate: ["x", "y", "rotation", 0, !0],
            timeResolution: 1,
            values: [{
               x: sprite.ball2_shader.position.x - 280,
               y: sprite.ball2_shader.position.y + 73
            }, {
               x: sprite.ball2_shader.position.x - 280,
               y: sprite.ball2_shader.position.y + 196
            }]
         },
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-720)
      })]).add([TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-180)
      }), TweenMax.to(sprite.ball2.position, 1, {
         x: sprite.ball2.position.x + 21,
         y: sprite.ball2.position.y + 263,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         x: sprite.ball2_shader.position.x + 21,
         y: sprite.ball2_shader.position.y + 263,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.ball2.position, 1, {
         bezier: {
            curviness: 1,
            autoRotate: ["x", "y", "rotation", 0, !0],
            timeResolution: 1,
            values: [{
               x: sprite.ball2.position.x + 66,
               y: sprite.ball2.position.y + 323
            }, {
               x: sprite.ball2.position.x + 64,
               y: sprite.ball2.position.y + 382
            }]
         },
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         bezier: {
            curviness: 1,
            autoRotate: ["x", "y", "rotation", 0, !0],
            timeResolution: 1,
            values: [{
               x: sprite.ball2_shader.position.x + 66,
               y: sprite.ball2_shader.position.y + 323
            }, {
               x: sprite.ball2_shader.position.x + 64,
               y: sprite.ball2_shader.position.y + 382
            }]
         },
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-90)
      })]).add([TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-450)
      }), TweenMax.to(sprite.ball2.position, 1, {
         x: sprite.ball2.position.x - 56,
         y: sprite.ball2.position.y + 464,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         x: sprite.ball2_shader.position.x - 56,
         y: sprite.ball2_shader.position.y + 464,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-630)
      }), TweenMax.to(sprite.ball2.position, 1, {
         x: sprite.ball2.position.x - 110,
         y: sprite.ball2.position.y + 575,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         x: sprite.ball2_shader.position.x - 110,
         y: sprite.ball2_shader.position.y + 575,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.ball2, 1, {
         rotation: findRad(-990)
      }), TweenMax.to(sprite.ball2.position, 1, {
         x: sprite.ball2.position.x - 338,
         y: sprite.ball2.position.y + 575,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         x: sprite.ball2_shader.position.x - 338,
         y: sprite.ball2_shader.position.y + 575,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.ball2.position, 1, {
         bezier: {
            curviness: 1,
            autoRotate: ["x", "y", "rotation", 0, !0],
            timeResolution: 1,
            values: [{
               x: sprite.ball2.position.x - 309,
               y: sprite.ball2.position.y + 560
            }, {
               x: sprite.ball2.position.x - 280,
               y: sprite.ball2.position.y + 575
            }]
         },
         ease: Linear.easeNone
      }), TweenMax.to(sprite.ball2_shader.position, 1, {
         bezier: {
            curviness: 1,
            autoRotate: ["x", "y", "rotation", 0, !0],
            timeResolution: 1,
            values: [{
               x: sprite.ball2_shader.position.x - 309,
               y: sprite.ball2_shader.position.y + 560
            }, {
               x: sprite.ball2_shader.position.x - 280,
               y: sprite.ball2_shader.position.y + 575
            }]
         },
         ease: Linear.easeNone
      })]),
      L = new ScrollScene({
         duration: 900,
         offset: 1519
      }).setTween(k).addTo(controller),
      N = (new TimelineMax).add([TweenMax.to(sprite.bagDrop_01, .02, {
         alpha: 0
      }), TweenMax.to(sprite.bagDrop_02, .01, {
         alpha: 1
      })]).add(TweenMax.to(sprite.bagDrop_02, 1, {
         alpha: 1
      })).add([TweenMax.to(sprite.bagDrop_02, .02, {
         alpha: 0
      }), TweenMax.to(sprite.bagDrop_03, .01, {
         alpha: 1
      }), TweenMax.to(sprite.bag_falling_final, .01, {
         alpha: 1
      }), TweenMax.to(sprite.bag_falling_final_shadow, .01, {
         alpha: 1
      })]).add(TweenMax.to(sprite.bagDrop_03, 1, {
         alpha: 1
      })),
      P = new ScrollScene({
         duration: 200,
         offset: 2304
      }).setTween(N).addTo(controller),
      R = (new TimelineMax).add([TweenMax.to(sprite.bag_falling_final.position, 1, {
         y: sprite.bag_falling_final.position.y + 546,
         x: sprite.bag_falling_final.position.x + 13,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.bag_falling_final_shadow.position, 1, {
         y: sprite.bag_falling_final_shadow.position.y + 546,
         x: sprite.bag_falling_final_shadow.position.x + 13,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.bag_falling_final, 1, {
         rotation: findRad(-58)
      }), TweenMax.to(sprite.bag_falling_final_shadow, 1, {
         rotation: findRad(-58)
      })]),
      F = new ScrollScene({
         duration: 500,
         offset: 2407
      }).setTween(R).addTo(controller),
      I = (new TimelineMax).add([TweenMax.to(sprite.bag_falling_final, .02, {
         alpha: 0
      }), TweenMax.to(sprite.bag_falling_final_shadow, .02, {
         alpha: 0
      }), TweenMax.to(sprite.bag_opening, .01, {
         alpha: 1
      }), TweenMax.to(sprite.shirt_crumpled_01, .01, {
         alpha: 1
      })]).add(TweenMax.to(sprite.bag_opening, 1, {
         alpha: 1
      })).add([TweenMax.to(sprite.bag_opening, .02, {
         alpha: 0
      }), TweenMax.to(sprite.hook1, .02, {
         alpha: 0
      }), TweenMax.to(sprite.hook2, .01, {
         alpha: 1
      })]).add(TweenMax.to(sprite.hook2, 1, {
         alpha: 1
      })).add([TweenMax.to(sprite.hook2, .02, {
         alpha: 0
      }), TweenMax.to(sprite.hook3, .01, {
         alpha: 1
      })]).add(TweenMax.to(sprite.hook3, 1, {
         alpha: 1
      })),
      C = new ScrollScene({
         duration: 280,
         offset: 2907
      }).setTween(I).addTo(controller),
      O = (new TimelineMax).add([TweenMax.to(sprite.shirt_crumpled_01.position, 1, {
         y: sprite.shirt_crumpled_01.position.y + 400,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.shirt_crumpled_02.position, 1, {
         y: sprite.shirt_crumpled_02.position.y + 400,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.shirt_crumpled_03.position, 1, {
         y: sprite.shirt_crumpled_03.position.y + 400,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.shirt_crumpled_01, .01, {
         alpha: 0
      }), TweenMax.to(sprite.shirt_crumpled_02, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.shirt_crumpled_01.position, 1, {
         y: sprite.shirt_crumpled_01.position.y + 800,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.shirt_crumpled_02.position, 1, {
         y: sprite.shirt_crumpled_02.position.y + 800,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.shirt_crumpled_03.position, 1, {
         y: sprite.shirt_crumpled_03.position.y + 800,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.shirt_crumpled_02, .01, {
         alpha: 0
      }), TweenMax.to(sprite.shirt_crumpled_03, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.shirt_crumpled_01.position, 1, {
         y: sprite.shirt_crumpled_01.position.y + 1200,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.shirt_crumpled_02.position, 1, {
         y: sprite.shirt_crumpled_02.position.y + 1200,
         ease: Linear.easeNone
      }), TweenMax.to(sprite.shirt_crumpled_03.position, 1, {
         y: sprite.shirt_crumpled_03.position.y + 1200,
         ease: Linear.easeNone
      })]).add([TweenMax.to(sprite.shirt_crumpled_03, .01, {
         alpha: 0
      })]),
      D = new ScrollScene({
         duration: 400,
         offset: 2908
      }).setTween(O).addTo(controller),
      z = new ScrollScene({
         duration: 60,
         offset: 3095
      }).setTween(TweenMax.to(gifSprite, .01, {
         alpha: 1
      })).addTo(controller),
      B = new ScrollScene({
         duration: 800,
         offset: 3130
      }).addTo(controller).on("progress", function(e) {
         tvUpdate = Math.floor(86 * e.progress) < 10 ? "0" + Math.floor(86 * e.progress) : Math.floor(86 * e.progress), gifSprite.setTexture(gifSprites["source_" + tvUpdate + ".jpg"])
      }),
      W = (new TimelineMax).add(TweenMax.to(sprite.unicorn_happy, 1, {
         alpha: 1
      })).add(TweenMax.to(sprite.unicorn_happy, .01, {
         alpha: 0
      })).add([TweenMax.to(dropSprite.drop_1, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_1.position, 1, {
         y: dropSprite.drop_1.position.y + 382,
         x: dropSprite.drop_1.position.x - 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_1, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_1.position, .01, {
         y: dropSprite.drop_1.position.y + 384,
         x: dropSprite.drop_1.position.x - 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_2, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_2.position, 1, {
         y: dropSprite.drop_2.position.y + 382,
         x: dropSprite.drop_2.position.x + 60,
         ease: Linear.easeNone
      })], 1.2).add([TweenMax.to(dropSprite.drop_2, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_2.position, .01, {
         y: dropSprite.drop_2.position.y + 384,
         x: dropSprite.drop_2.position.x + 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_3, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_3.position, 1.2, {
         y: dropSprite.drop_3.position.y + 382,
         x: dropSprite.drop_3.position.x - 56,
         ease: Linear.easeNone
      })], 1.2).add([TweenMax.to(dropSprite.drop_3, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_3.position, .01, {
         y: dropSprite.drop_3.position.y + 382,
         x: dropSprite.drop_3.position.x - 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_4, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_4.position, 1.2, {
         y: dropSprite.drop_4.position.y + 382,
         x: dropSprite.drop_4.position.x + 20,
         ease: Linear.easeNone
      })], 1.3).add([TweenMax.to(dropSprite.drop_4, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_4.position, .01, {
         y: dropSprite.drop_4.position.y + 382,
         x: dropSprite.drop_4.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_5, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_5.position, 1.2, {
         y: dropSprite.drop_5.position.y + 382,
         x: dropSprite.drop_5.position.x - 20,
         ease: Linear.easeNone
      })], 1.35).add([TweenMax.to(dropSprite.drop_5, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_5.position, .01, {
         y: dropSprite.drop_5.position.y + 383,
         x: dropSprite.drop_5.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_6, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_6.position, 1.2, {
         y: dropSprite.drop_6.position.y + 382,
         x: dropSprite.drop_6.position.x + 50,
         ease: Linear.easeNone
      })], 1.36).add([TweenMax.to(dropSprite.drop_6, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_6.position, .01, {
         y: dropSprite.drop_6.position.y + 383,
         x: dropSprite.drop_6.position.x + 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_7, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_7.position, 1.5, {
         y: dropSprite.drop_7.position.y + 382,
         x: dropSprite.drop_7.position.x - 20,
         ease: Linear.easeNone
      })], 1.36).add([TweenMax.to(dropSprite.drop_7, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_7.position, .01, {
         y: dropSprite.drop_7.position.y + 383,
         x: dropSprite.drop_7.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_8, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_8.position, 1.23, {
         y: dropSprite.drop_8.position.y + 382,
         x: dropSprite.drop_8.position.x + 30,
         ease: Linear.easeNone
      })], 1.4).add([TweenMax.to(dropSprite.drop_8, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_8.position, .01, {
         y: dropSprite.drop_8.position.y + 384,
         x: dropSprite.drop_8.position.x + 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_9, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_9.position, 1.25, {
         y: dropSprite.drop_9.position.y + 382,
         x: dropSprite.drop_9.position.x - 60,
         ease: Linear.easeNone
      })], 1.43).add([TweenMax.to(dropSprite.drop_9, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_9.position, .01, {
         y: dropSprite.drop_9.position.y + 384,
         x: dropSprite.drop_9.position.x - 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_10, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_10.position, 1.26, {
         y: dropSprite.drop_10.position.y + 382,
         x: dropSprite.drop_10.position.x + 56,
         ease: Linear.easeNone
      })], 1.46).add([TweenMax.to(dropSprite.drop_10, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_10.position, .01, {
         y: dropSprite.drop_10.position.y + 382,
         x: dropSprite.drop_10.position.x + 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_11, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_11.position, 1.27, {
         y: dropSprite.drop_11.position.y + 382,
         x: dropSprite.drop_11.position.x - 20,
         ease: Linear.easeNone
      })], 1.5).add([TweenMax.to(dropSprite.drop_11, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_11.position, .01, {
         y: dropSprite.drop_11.position.y + 382,
         x: dropSprite.drop_11.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_12, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_12.position, 1.28, {
         y: dropSprite.drop_12.position.y + 382,
         x: dropSprite.drop_12.position.x + 20,
         ease: Linear.easeNone
      })], 1.52).add([TweenMax.to(dropSprite.drop_12, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_12.position, .01, {
         y: dropSprite.drop_12.position.y + 383,
         x: dropSprite.drop_12.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_13, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_13.position, 1.29, {
         y: dropSprite.drop_13.position.y + 382,
         x: dropSprite.drop_13.position.x - 50,
         ease: Linear.easeNone
      })], 1.6).add([TweenMax.to(dropSprite.drop_13, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_13.position, .01, {
         y: dropSprite.drop_13.position.y + 383,
         x: dropSprite.drop_13.position.x - 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_14, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_14.position, 1.3, {
         y: dropSprite.drop_14.position.y + 382,
         x: dropSprite.drop_14.position.x + 20,
         ease: Linear.easeNone
      })], 1.7).add([TweenMax.to(dropSprite.drop_14, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_14.position, .01, {
         y: dropSprite.drop_14.position.y + 383,
         x: dropSprite.drop_14.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_15, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_15.position, 1.31, {
         y: dropSprite.drop_15.position.y + 382,
         x: dropSprite.drop_15.position.x - 30,
         ease: Linear.easeNone
      })], 1.83).add([TweenMax.to(dropSprite.drop_15, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_15.position, .01, {
         y: dropSprite.drop_15.position.y + 384,
         x: dropSprite.drop_15.position.x - 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_16, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_16.position, 1.32, {
         y: dropSprite.drop_16.position.y + 382,
         x: dropSprite.drop_16.position.x + 60,
         ease: Linear.easeNone
      })], 1.89).add([TweenMax.to(dropSprite.drop_16, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_16.position, .01, {
         y: dropSprite.drop_16.position.y + 384,
         x: dropSprite.drop_16.position.x + 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_17, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_17.position, 1.33, {
         y: dropSprite.drop_17.position.y + 382,
         x: dropSprite.drop_17.position.x - 56,
         ease: Linear.easeNone
      })], 1.95).add([TweenMax.to(dropSprite.drop_17, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_17.position, .01, {
         y: dropSprite.drop_17.position.y + 382,
         x: dropSprite.drop_17.position.x - 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_18, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_18.position, 1.34, {
         y: dropSprite.drop_18.position.y + 382,
         x: dropSprite.drop_18.position.x + 20,
         ease: Linear.easeNone
      })], 2).add([TweenMax.to(dropSprite.drop_18, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_18.position, .01, {
         y: dropSprite.drop_18.position.y + 382,
         x: dropSprite.drop_18.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_19, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_19.position, 1.35, {
         y: dropSprite.drop_19.position.y + 382,
         x: dropSprite.drop_19.position.x - 20,
         ease: Linear.easeNone
      })], 2.1).add([TweenMax.to(dropSprite.drop_19, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_19.position, .01, {
         y: dropSprite.drop_19.position.y + 383,
         x: dropSprite.drop_19.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_20, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_20.position, 1.36, {
         y: dropSprite.drop_20.position.y + 382,
         x: dropSprite.drop_20.position.x + 50,
         ease: Linear.easeNone
      })], 2.3).add([TweenMax.to(dropSprite.drop_20, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_20.position, .01, {
         y: dropSprite.drop_20.position.y + 383,
         x: dropSprite.drop_20.position.x + 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_21, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_21.position, 1.37, {
         y: dropSprite.drop_21.position.y + 382,
         x: dropSprite.drop_21.position.x - 20,
         ease: Linear.easeNone
      })], 2.42).add([TweenMax.to(dropSprite.drop_21, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_21.position, .01, {
         y: dropSprite.drop_21.position.y + 383,
         x: dropSprite.drop_21.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_22, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_22.position, 1.38, {
         y: dropSprite.drop_22.position.y + 382,
         x: dropSprite.drop_22.position.x + 30,
         ease: Linear.easeNone
      })], 2.5).add([TweenMax.to(dropSprite.drop_22, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_22.position, .01, {
         y: dropSprite.drop_22.position.y + 384,
         x: dropSprite.drop_22.position.x + 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_23, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_23.position, 1.39, {
         y: dropSprite.drop_23.position.y + 382,
         x: dropSprite.drop_23.position.x - 60,
         ease: Linear.easeNone
      })], 2.54).add([TweenMax.to(dropSprite.drop_23, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_23.position, .01, {
         y: dropSprite.drop_23.position.y + 384,
         x: dropSprite.drop_23.position.x - 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_24, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_24.position, 1.4, {
         y: dropSprite.drop_24.position.y + 382,
         x: dropSprite.drop_24.position.x + 56,
         ease: Linear.easeNone
      })], 2.59).add([TweenMax.to(dropSprite.drop_24, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_24.position, .01, {
         y: dropSprite.drop_24.position.y + 382,
         x: dropSprite.drop_24.position.x + 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_25, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_25.position, 1.41, {
         y: dropSprite.drop_25.position.y + 382,
         x: dropSprite.drop_25.position.x - 20,
         ease: Linear.easeNone
      })], 2.65).add([TweenMax.to(dropSprite.drop_25, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_25.position, .01, {
         y: dropSprite.drop_25.position.y + 382,
         x: dropSprite.drop_25.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_26, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_26.position, 1.42, {
         y: dropSprite.drop_26.position.y + 382,
         x: dropSprite.drop_26.position.x + 20,
         ease: Linear.easeNone
      })], 2.7).add([TweenMax.to(dropSprite.drop_26, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_26.position, .01, {
         y: dropSprite.drop_26.position.y + 383,
         x: dropSprite.drop_26.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_27, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_27.position, 1.43, {
         y: dropSprite.drop_27.position.y + 382,
         x: dropSprite.drop_27.position.x - 50,
         ease: Linear.easeNone
      })], 2.79).add([TweenMax.to(dropSprite.drop_27, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_27.position, .01, {
         y: dropSprite.drop_27.position.y + 383,
         x: dropSprite.drop_27.position.x - 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_28, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_28.position, 1.44, {
         y: dropSprite.drop_28.position.y + 382,
         x: dropSprite.drop_28.position.x + 20,
         ease: Linear.easeNone
      })], 2.86).add([TweenMax.to(dropSprite.drop_28, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_28.position, .01, {
         y: dropSprite.drop_28.position.y + 383,
         x: dropSprite.drop_28.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_29, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_29.position, 1.45, {
         y: dropSprite.drop_29.position.y + 382,
         x: dropSprite.drop_29.position.x - 30,
         ease: Linear.easeNone
      })], 2.9).add([TweenMax.to(dropSprite.drop_29, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_29.position, .01, {
         y: dropSprite.drop_29.position.y + 384,
         x: dropSprite.drop_29.position.x - 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_30, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_30.position, 1.47, {
         y: dropSprite.drop_30.position.y + 382,
         x: dropSprite.drop_30.position.x + 60,
         ease: Linear.easeNone
      })], 3).add([TweenMax.to(dropSprite.drop_30, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_30.position, .01, {
         y: dropSprite.drop_30.position.y + 384,
         x: dropSprite.drop_30.position.x + 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_31, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_31.position, 1.48, {
         y: dropSprite.drop_31.position.y + 382,
         x: dropSprite.drop_31.position.x - 56,
         ease: Linear.easeNone
      })], 3.1).add([TweenMax.to(dropSprite.drop_31, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_31.position, .01, {
         y: dropSprite.drop_31.position.y + 382,
         x: dropSprite.drop_31.position.x - 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_32, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_32.position, 1.5, {
         y: dropSprite.drop_32.position.y + 382,
         x: dropSprite.drop_32.position.x + 20,
         ease: Linear.easeNone
      })], 3.15).add([TweenMax.to(dropSprite.drop_32, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_32.position, .01, {
         y: dropSprite.drop_32.position.y + 382,
         x: dropSprite.drop_32.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_33, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_33.position, 1.51, {
         y: dropSprite.drop_33.position.y + 382,
         x: dropSprite.drop_33.position.x - 20,
         ease: Linear.easeNone
      })], 3.3).add([TweenMax.to(dropSprite.drop_33, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_33.position, .01, {
         y: dropSprite.drop_33.position.y + 383,
         x: dropSprite.drop_33.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_34, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_34.position, 1.52, {
         y: dropSprite.drop_34.position.y + 382,
         x: dropSprite.drop_34.position.x + 50,
         ease: Linear.easeNone
      })], 3.6).add([TweenMax.to(dropSprite.drop_34, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_34.position, .01, {
         y: dropSprite.drop_34.position.y + 383,
         x: dropSprite.drop_34.position.x + 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_35, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_35.position, 1.52, {
         y: dropSprite.drop_35.position.y + 382,
         x: dropSprite.drop_35.position.x - 20,
         ease: Linear.easeNone
      })], 3.65).add([TweenMax.to(dropSprite.drop_35, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_35.position, .01, {
         y: dropSprite.drop_35.position.y + 383,
         x: dropSprite.drop_35.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_36, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_36.position, 1.53, {
         y: dropSprite.drop_36.position.y + 382,
         x: dropSprite.drop_36.position.x + 30,
         ease: Linear.easeNone
      })], 3.7).add([TweenMax.to(dropSprite.drop_36, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_36.position, .01, {
         y: dropSprite.drop_36.position.y + 384,
         x: dropSprite.drop_36.position.x + 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_37, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_37.position, 1.55, {
         y: dropSprite.drop_37.position.y + 382,
         x: dropSprite.drop_37.position.x - 60,
         ease: Linear.easeNone
      })], 3.73).add([TweenMax.to(dropSprite.drop_37, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_37.position, .01, {
         y: dropSprite.drop_37.position.y + 384,
         x: dropSprite.drop_37.position.x - 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_38, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_38.position, 1.56, {
         y: dropSprite.drop_38.position.y + 382,
         x: dropSprite.drop_38.position.x + 56,
         ease: Linear.easeNone
      })], 3.8).add([TweenMax.to(dropSprite.drop_38, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_38.position, .01, {
         y: dropSprite.drop_38.position.y + 382,
         x: dropSprite.drop_38.position.x + 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_39, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_39.position, 1.57, {
         y: dropSprite.drop_39.position.y + 382,
         x: dropSprite.drop_39.position.x - 20,
         ease: Linear.easeNone
      })], 3.9).add([TweenMax.to(dropSprite.drop_39, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_39.position, .01, {
         y: dropSprite.drop_39.position.y + 382,
         x: dropSprite.drop_39.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_40, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_40.position, 1.58, {
         y: dropSprite.drop_40.position.y + 382,
         x: dropSprite.drop_40.position.x + 20,
         ease: Linear.easeNone
      })], 4).add([TweenMax.to(dropSprite.drop_40, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_40.position, .01, {
         y: dropSprite.drop_40.position.y + 383,
         x: dropSprite.drop_40.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_41, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_41.position, 1.59, {
         y: dropSprite.drop_41.position.y + 382,
         x: dropSprite.drop_41.position.x - 50,
         ease: Linear.easeNone
      })], 4.06).add([TweenMax.to(dropSprite.drop_41, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_41.position, .01, {
         y: dropSprite.drop_41.position.y + 383,
         x: dropSprite.drop_41.position.x - 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_42, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_42.position, 1.6, {
         y: dropSprite.drop_42.position.y + 382,
         x: dropSprite.drop_42.position.x + 20,
         ease: Linear.easeNone
      })], 4.1).add([TweenMax.to(dropSprite.drop_42, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_42.position, .01, {
         y: dropSprite.drop_42.position.y + 383,
         x: dropSprite.drop_42.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_43, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_43.position, 1.61, {
         y: dropSprite.drop_43.position.y + 382,
         x: dropSprite.drop_43.position.x - 30,
         ease: Linear.easeNone
      })], 4.2).add([TweenMax.to(dropSprite.drop_43, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_43.position, .01, {
         y: dropSprite.drop_43.position.y + 384,
         x: dropSprite.drop_43.position.x - 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_44, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_44.position, 1.62, {
         y: dropSprite.drop_44.position.y + 382,
         x: dropSprite.drop_44.position.x + 60,
         ease: Linear.easeNone
      })], 4.24).add([TweenMax.to(dropSprite.drop_44, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_44.position, .01, {
         y: dropSprite.drop_44.position.y + 384,
         x: dropSprite.drop_44.position.x + 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_45, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_45.position, 1.63, {
         y: dropSprite.drop_45.position.y + 382,
         x: dropSprite.drop_45.position.x - 56,
         ease: Linear.easeNone
      })], 4.26).add([TweenMax.to(dropSprite.drop_45, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_45.position, .01, {
         y: dropSprite.drop_45.position.y + 382,
         x: dropSprite.drop_45.position.x - 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_46, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_46.position, 1.64, {
         y: dropSprite.drop_46.position.y + 382,
         x: dropSprite.drop_46.position.x + 20,
         ease: Linear.easeNone
      })], 4.3).add([TweenMax.to(dropSprite.drop_46, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_46.position, .01, {
         y: dropSprite.drop_46.position.y + 382,
         x: dropSprite.drop_46.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_47, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_47.position, 1.65, {
         y: dropSprite.drop_47.position.y + 382,
         x: dropSprite.drop_47.position.x - 20,
         ease: Linear.easeNone
      })], 4.34).add([TweenMax.to(dropSprite.drop_47, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_47.position, .01, {
         y: dropSprite.drop_47.position.y + 383,
         x: dropSprite.drop_47.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_48, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_48.position, 1.66, {
         y: dropSprite.drop_48.position.y + 382,
         x: dropSprite.drop_48.position.x + 50,
         ease: Linear.easeNone
      })], 4.38).add([TweenMax.to(dropSprite.drop_48, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_48.position, .01, {
         y: dropSprite.drop_48.position.y + 383,
         x: dropSprite.drop_48.position.x + 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_49, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_49.position, 1.67, {
         y: dropSprite.drop_49.position.y + 382,
         x: dropSprite.drop_49.position.x - 20,
         ease: Linear.easeNone
      })], 4.4).add([TweenMax.to(dropSprite.drop_49, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_49.position, .01, {
         y: dropSprite.drop_49.position.y + 383,
         x: dropSprite.drop_49.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_50, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_50.position, 1.68, {
         y: dropSprite.drop_50.position.y + 382,
         x: dropSprite.drop_50.position.x + 30,
         ease: Linear.easeNone
      })], 4.42).add([TweenMax.to(dropSprite.drop_50, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_50.position, .01, {
         y: dropSprite.drop_50.position.y + 384,
         x: dropSprite.drop_50.position.x + 30,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_51, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_51.position, 1.69, {
         y: dropSprite.drop_51.position.y + 382,
         x: dropSprite.drop_51.position.x - 60,
         ease: Linear.easeNone
      })], 4.48).add([TweenMax.to(dropSprite.drop_51, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_51.position, .01, {
         y: dropSprite.drop_51.position.y + 384,
         x: dropSprite.drop_51.position.x - 60,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_52, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_52.position, 1.7, {
         y: dropSprite.drop_52.position.y + 382,
         x: dropSprite.drop_52.position.x + 56,
         ease: Linear.easeNone
      })], 4.5).add([TweenMax.to(dropSprite.drop_52, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_52.position, .01, {
         y: dropSprite.drop_52.position.y + 382,
         x: dropSprite.drop_52.position.x + 56,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_53, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_53.position, 1.71, {
         y: dropSprite.drop_53.position.y + 382,
         x: dropSprite.drop_53.position.x - 20,
         ease: Linear.easeNone
      })], 4.56).add([TweenMax.to(dropSprite.drop_53, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_53.position, .01, {
         y: dropSprite.drop_53.position.y + 382,
         x: dropSprite.drop_53.position.x - 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_54, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_54.position, 1.72, {
         y: dropSprite.drop_54.position.y + 382,
         x: dropSprite.drop_54.position.x + 20,
         ease: Linear.easeNone
      })], 4.6).add([TweenMax.to(dropSprite.drop_54, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_54.position, .01, {
         y: dropSprite.drop_54.position.y + 383,
         x: dropSprite.drop_54.position.x + 20,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_55, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_55.position, 1.73, {
         y: dropSprite.drop_55.position.y + 382,
         x: dropSprite.drop_55.position.x - 50,
         ease: Linear.easeNone
      })], 4.65).add([TweenMax.to(dropSprite.drop_55, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_55.position, .01, {
         y: dropSprite.drop_55.position.y + 383,
         x: dropSprite.drop_55.position.x - 50,
         ease: Linear.easeNone
      })]).add([TweenMax.to(dropSprite.drop_56, .08, {
         alpha: 1
      }), TweenMax.to(dropSprite.drop_56.position, 1.74, {
         y: dropSprite.drop_56.position.y + 382,
         x: dropSprite.drop_56.position.x + 20,
         ease: Linear.easeNone
      })], 4.7).add([TweenMax.to(dropSprite.drop_56, .01, {
         alpha: 0
      }), TweenMax.to(dropSprite.drop_56.position, .01, {
         y: dropSprite.drop_56.position.y + 383,
         x: dropSprite.drop_56.position.x + 20,
         ease: Linear.easeNone
      })]),
      A = new ScrollScene({
         duration: 950,
         offset: 3110
      }).setTween(W).addTo(controller),
      X = (new TimelineMax).add([TweenMax.to(sprite.funnel2, .01, {
         alpha: 1
      }), TweenMax.to(sprite.funnel1, .02, {
         alpha: 0
      })]).add([TweenMax.to(sprite.tank_bg, 1, {
         alpha: 1
      })]).add([TweenMax.to(sprite.tank_low, .01, {
         alpha: 1
      }), TweenMax.to(sprite.tank_withShirt, .02, {
         alpha: 0
      })]).add([TweenMax.to(sprite.tank_low, 2, {
         alpha: 1
      })]).add([TweenMax.to(sprite.tank_low, .02, {
         alpha: 0
      }), TweenMax.to(sprite.tank_mid, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.tank_mid, .5, {
         alpha: 1
      })]).add([TweenMax.to(sprite.funnel1, .01, {
         alpha: 1
      }), TweenMax.to(sprite.funnel2, .02, {
         alpha: 0
      }), TweenMax.to(sprite.tank_mid, .02, {
         alpha: 0
      }), TweenMax.to(sprite.tank_high, .01, {
         alpha: 1
      }), TweenMax.to(sprite.tank_nofront, .01, {
         rotation: findRad(180)
      }), TweenMax.to(sprite.tank_nofront.position, .01, {
         x: sprite.tank_nofront.position.x + 482,
         y: sprite.tank_nofront.position.y + 211
      })]).add([TweenMax.to(sprite.tank_high, .5, {
         alpha: 1
      })]).add([TweenMax.to(sprite.tank_high, .02, {
         alpha: 0
      }), TweenMax.to(sprite.tank_front, .02, {
         alpha: 0
      }), TweenMax.to(sprite.tank_side, .01, {
         alpha: 1
      })]).add([TweenMax.to(sprite.tank_side, .5, {
         alpha: 1
      })]).add([TweenMax.to(sprite.tank_side, .02, {
         alpha: 0
      }), TweenMax.to(sprite.tank_nofront, .01, {
         alpha: 1
      }), TweenMax.to($(".tank_empty_front"), .01, {
         opacity: 1
      }), TweenMax.to($(".tearSpill"), .01, {
         opacity: 1
      })]),
      j = new ScrollScene({
         duration: 860,
         offset: 3566
      }).setTween(X).addTo(controller);
   if ($("html").hasClass("firefox")) var q = (new TimelineMax).add([TweenMax.to(".spillBack svg .element", 1, {
      backgroundPosition: "0px 630px"
   }), TweenMax.to(".spillFront svg .element", 1, {
      backgroundPosition: "0px 630px"
   })]),
      U = (new TimelineMax).add([TweenMax.to(".spillGrate svg .element", 1, {
         backgroundPosition: "0px 490px"
      })]);
   else var q = (new TimelineMax).add([TweenMax.to(".spillBack svg .element", 1, {
      backgroundPositionY: "630px"
   }), TweenMax.to(".spillFront svg .element", 1, {
      backgroundPositionY: "630px"
   })]),
      U = (new TimelineMax).add([TweenMax.to(".spillGrate svg .element", 1, {
         backgroundPositionY: "490px"
      })]);
   new ScrollScene({
      duration: 300,
      offset: 4426
   }).setTween(q).addTo(controller);
   var E = (new TimelineMax).add([TweenMax.to($(".tank_empty_front"), .02, {
      opacity: 0
   }), TweenMax.to(sprite.tank_nofront, .02, {
      alpha: 0
   }), TweenMax.to(sprite.tank_front, .01, {
      alpha: 1
   }), TweenMax.to(sprite.savedTank, .01, {
      alpha: 1
   })]).add([TweenMax.to(sprite.savedTank, 1, {
      alpha: 1
   })]);
   new ScrollScene({
      duration: 800,
      offset: 4538
   }).setTween(E).addTo(controller), new ScrollScene({
      duration: 550,
      offset: 4500
   }).setTween(U).addTo(controller);
   var G = (new TimelineMax).add([TweenMax.to(".wetCrumpled", .01, {
      opacity: 1
   })]).add([TweenMax.to(".wetCrumpled", 1, {
      y: 404,
      ease: Linear.easeNone
   })]).add([TweenMax.to(".wetCrumpled", 1, {
      x: 380,
      y: 504,
      ease: Linear.easeNone
   })]).add([TweenMax.to(".wetcrump.one", .01, {
      alpha: 0
   }), TweenMax.to(".wetcrump.two", .01, {
      alpha: 1
   }), TweenMax.to(".wetCrumpled", 1, {
      x: 534,
      y: 552,
      ease: Linear.easeNone
   })]).add([TweenMax.to(".wetcrump.two", .01, {
      alpha: 0
   }), TweenMax.to(".wetcrump.three", .01, {
      alpha: 1
   }), TweenMax.to(".wetCrumpled", 1, {
      x: 542,
      y: 1100,
      ease: Linear.easeNone
   })]).add([TweenMax.to(".wetcrump.three", .01, {
      alpha: 0
   }), TweenMax.to(sprite.hangar, .01, {
      alpha: 0
   }), TweenMax.to(sprite.shirt_wet, .01, {
      alpha: 1
   })]);
   new ScrollScene({
      duration: 400,
      offset: 4426
   }).setTween(G).addTo(controller), sprite.crank_1.pivot.set(250, 250), sprite.crank_4.pivot.set(250, 250), sprite.crank_5.pivot.set(286, 302), sprite.wheelsBack.pivot.set(177, 171), sprite.wheelFront.pivot.set(181, 160), sprite.wheelsBackTwo.pivot.set(441, 171), sprite.wheelFrontTwo.pivot.set(449, 176);
   var H = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.crank_1, 1, {
      rotation: findRad(-90),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_4, 1, {
      rotation: findRad(-90),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_5, 1, {
      rotation: findRad(-90),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelFront, 1, {
      rotation: findRad(90),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBack, 1, {
      rotation: findRad(90),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.crank_1, 1, {
      rotation: findRad(-180),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_4, 1, {
      rotation: findRad(-180),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_5, 1, {
      rotation: findRad(-180),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelFront, 1, {
      rotation: findRad(180),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBack, 1, {
      rotation: findRad(180),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.crank_1, 1, {
      rotation: findRad(-270),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_4, 1, {
      rotation: findRad(-270),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_5, 1, {
      rotation: findRad(-270),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelFront, 1, {
      rotation: findRad(270),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBack, 1, {
      rotation: findRad(270),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.crank_1, 1, {
      rotation: findRad(-360),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_4, 1, {
      rotation: findRad(-360),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.crank_5, 1, {
      rotation: findRad(-360),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelFront, 1, {
      rotation: findRad(360),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBack, 1, {
      rotation: findRad(360),
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 670,
      offset: 4726
   }).setTween(H).addTo(controller);
   var Y = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.wheelFrontTwo, 1, {
      rotation: findRad(90),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBackTwo, 1, {
      rotation: findRad(90),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.wheelFrontTwo, 1, {
      rotation: findRad(180),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBackTwo, 1, {
      rotation: findRad(180),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.wheelFrontTwo, 1, {
      rotation: findRad(270),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBackTwo, 1, {
      rotation: findRad(270),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.wheelFrontTwo, 1, {
      rotation: findRad(360),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.wheelsBackTwo, 1, {
      rotation: findRad(360),
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 1500,
      offset: 4950
   }).setTween(Y).addTo(controller);
   var V = (new TimelineMax).add([TweenMax.to(sprite.ball1Last.position, .01, {
      y: sprite.ball1Last.position.y - 44
   }), TweenMax.to(sprite.ball1LastShader.position, .01, {
      y: sprite.ball1LastShader.position.y - 44
   }), TweenMax.to(sprite.leverFlat, .01, {
      alpha: 0
   }), TweenMax.to(sprite.leverSide, .01, {
      alpha: 1
   })]).add([TweenMax.to(sprite.ball1Last, 1.1, {
      bezier: {
         curviness: 1.1,
         autoRotate: ["x", "y", "rotation", 0, !0],
         timeResolution: 1,
         values: [{
            x: sprite.ball1Last.position.x - 35,
            y: sprite.ball1Last.position.y - 40
         }, {
            x: sprite.ball1Last.position.x - 110,
            y: sprite.ball1Last.position.y + 178
         }]
      },
      ease: Linear.easeNone
   }), TweenMax.to(sprite.ball1LastShader, 1.1, {
      bezier: {
         curviness: 1.1,
         autoRotate: !1,
         timeResolution: 1,
         values: [{
            x: sprite.ball1LastShader.position.x - 35,
            y: sprite.ball1LastShader.position.y - 40
         }, {
            x: -500,
            y: sprite.ball1LastShader.position.y + 178
         }]
      },
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.redLight, .01, {
      alpha: 0
   }), TweenMax.to(sprite.greenLight, .01, {
      alpha: 1
   }), TweenMax.to(sprite.wind_turbine, .01, {
      alpha: 1
   })]);
   new ScrollScene({
      duration: 150,
      offset: 4732
   }).setTween(V).addTo(controller);
   var K = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.windMaskFilter.offset, .7, {
      x: -512,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.windMaskFilter.offset, .7, {
      x: -1024,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 516,
      offset: 4880
   }).setTween(K).addTo(controller);
   var Q = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.windMaskFilterTwo.offset, 1.2, {
      x: -512,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.windMaskFilterTwo.offset, 1.2, {
      x: -1024,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 1300,
      offset: 5e3
   }).setTween(Q).addTo(controller);
   var Z = (new TimelineMax).add([TweenMax.to(sprite.shirt_wet.position, .3, {
      y: sprite.shirt_wet.position.y + 80,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.shirt_wet, .02, {
      alpha: 0
   }), TweenMax.to(sprite.shirt_breeze1, .01, {
      alpha: 1
   }), TweenMax.to(sprite.shirt_breeze1.position, 1, {
      y: sprite.shirt_breeze1.position.y + 270,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.shirt_breeze1, .02, {
      alpha: 0
   }), TweenMax.to(sprite.shirt_dry_straight, .01, {
      alpha: 1
   }), TweenMax.to(sprite.shirt_dry_straight.position, .2, {
      y: sprite.shirt_dry_straight.position.y + 30,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.burners_01, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_02, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_03, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_04, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_05, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_06, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_07, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_08, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_09, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_10, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_11, .2, {
      alpha: 1
   }), TweenMax.to(sprite.burners_12, .2, {
      alpha: 1
   })]).add([TweenMax.to(sprite.shirt_dry_straight.position, 1, {
      y: sprite.shirt_dry_straight.position.y + 300,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.shirt_dry_straight.position, .3, {
      y: sprite.shirt_dry_straight.position.y + 400,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.burners_01, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_02, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_03, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_04, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_05, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_06, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_07, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_08, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_09, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_10, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_11, .2, {
      alpha: 0
   }), TweenMax.to(sprite.burners_12, .2, {
      alpha: 0
   })]).add([TweenMax.to(sprite.shirt_dry_straight, .01, {
      alpha: 0
   }), TweenMax.to(sprite.shirt_breeze2, .01, {
      alpha: 1
   }), TweenMax.to(sprite.shirt_breeze2, 1, {
      y: sprite.shirt_breeze2.position.y + 291,
      ease: Linear.easeNone
   }), TweenMax.to(sprite.shirt_dry_straight, .01, {
      y: 8900,
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.shirt_breeze2, .02, {
      alpha: 0
   }), TweenMax.to(sprite.shirt_dry_straight, .01, {
      alpha: 1
   }), TweenMax.to(sprite.shirt_dry_straight.position, 1, {
      y: 9182,
      x: 285,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 900,
      offset: 4830
   }).setTween(Z).addTo(controller), sprite.palm_shadow.pivot.set(30, 170), sprite.palm.pivot.set(30, 170);
   var J = new TimelineMax({
      repeat: -1
   }).add([TweenMax.to(sprite.palm_shadow, 1, {
      rotation: findRad(20),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.palm, 1, {
      rotation: findRad(20),
      ease: Linear.easeNone
   })]).add([TweenMax.to(sprite.palm_shadow, 1, {
      rotation: findRad(0),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.palm, 1, {
      rotation: findRad(0),
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 1300,
      offset: 5e3
   }).setTween(J).addTo(controller);
   var eo = (new TimelineMax).add([TweenMax.to(sprite.wind_palm, .01, {
      alpha: 1
   })]).add([TweenMax.to(sprite.wind_palm, 1, {
      alpha: 1
   })]).add([TweenMax.to(sprite.wind_palm, .01, {
      alpha: 0
   })]);
   new ScrollScene({
      duration: 1300,
      offset: 5e3
   }).setTween(eo).addTo(controller);
   var oo = (new TimelineMax).add([TweenMax.to(sprite.shirt_dry_straight.position, 1, {
      x: 220,
      y: 9215,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 50,
      offset: 5730
   }).setTween(oo).addTo(controller), sprite.carrot.pivot.set(35, 15);
   var oo = (new TimelineMax).add([TweenMax.to(sprite.rabbit1, .01, {
      alpha: 0
   }), TweenMax.to(sprite.rabbit2, .01, {
      alpha: 1
   })]).add([TweenMax.to(sprite.carrot, 1, {
      rotation: findRad(15),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.rabbit2, 1, {
      alpha: 1
   })]).add([TweenMax.to(sprite.rabbit1, .01, {
      alpha: 1
   }), TweenMax.to(sprite.rabbit2, .01, {
      alpha: 0
   })]).add([TweenMax.to(sprite.carrot, 1, {
      rotation: findRad(0),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.rabbit1, 1, {
      alpha: 1
   })]).add([TweenMax.to(sprite.rabbit1, .01, {
      alpha: 0
   }), TweenMax.to(sprite.rabbit2, .01, {
      alpha: 1
   })]).add([TweenMax.to(sprite.carrot, 1, {
      rotation: findRad(15),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.rabbit2, 1, {
      alpha: 1
   })]).add([TweenMax.to(sprite.rabbit1, .01, {
      alpha: 1
   }), TweenMax.to(sprite.rabbit2, .01, {
      alpha: 0
   })]).add([TweenMax.to(sprite.carrot, 1, {
      rotation: findRad(0),
      ease: Linear.easeNone
   }), TweenMax.to(sprite.rabbit1, 1, {
      alpha: 1
   })]).add([TweenMax.to(sprite.machine1, .01, {
      alpha: 0
   }), TweenMax.to(sprite.machine2, .01, {
      alpha: 1
   }), TweenMax.to(sprite.rabbit1, .01, {
      alpha: 0
   }), TweenMax.to(sprite.rabbit2, .01, {
      alpha: 1
   }), TweenMax.to(sprite.shirt_dry_straight, .01, {
      alpha: 0
   }), TweenMax.to(sprite.shirtSide, .01, {
      alpha: 1
   })]);
   new ScrollScene({
      duration: 574,
      offset: 5660
   }).setTween(oo).addTo(controller);
   var io = new TimelineMax({
      repeat: -1
   }).add(TweenMax.to(sprite.carrot, .7, {
      rotation: findRad(10),
      ease: Power2.easeOut
   })).add(TweenMax.to(sprite.carrot, 1, {
      rotation: findRad(1),
      ease: Power1.easeIn
   })),
      to = new TimelineMax({
         repeat: -1
      }).add([TweenMax.to(sprite.rabbit2, .4, {
         alpha: 1
      })]).add([TweenMax.to(sprite.rabbit1, .01, {
         alpha: 1
      }), TweenMax.to(sprite.rabbit2, .01, {
         alpha: 0
      })]).add([TweenMax.to(sprite.rabbit1, .4, {
         alpha: 1
      })]).add([TweenMax.to(sprite.rabbit2, .01, {
         alpha: 1
      }), TweenMax.to(sprite.rabbit1, .01, {
         alpha: 0
      })]).add([TweenMax.to(sprite.rabbit2, .4, {
         alpha: 1
      })]).add([TweenMax.to(sprite.rabbit1, .01, {
         alpha: 1
      }), TweenMax.to(sprite.rabbit2, .01, {
         alpha: 0
      })]).add([TweenMax.to(sprite.rabbit1, .4, {
         alpha: 1
      })]).add([TweenMax.to(sprite.rabbit2, .01, {
         alpha: 1
      }), TweenMax.to(sprite.rabbit1, .01, {
         alpha: 0
      })]);
   new ScrollScene({
      duration: 1e3,
      offset: 6234
   }).setTween(io).addTo(controller), new ScrollScene({
      duration: 1e3,
      offset: 6334
   }).setTween(to).addTo(controller);
   var ao = (new TimelineMax).add([TweenMax.to(sprite.openLocker_back, 1, {
      alpha: 0
   }), TweenMax.to(sprite.openLocker_fore, 1, {
      alpha: 0
   }), TweenMax.to(sprite.midLocker_back, 1, {
      alpha: 1
   }), TweenMax.to(sprite.midLocker_fore, 1, {
      alpha: 1
   })]),
      ro = new ScrollScene({
         duration: 1,
         offset: 7155
      }).setTween(ao).addTo(controller),
      no = (new TimelineMax).add([TweenMax.to(sprite.shirtSide, 1, {
         alpha: 0
      }), TweenMax.to(sprite.midLocker_back, 1, {
         alpha: 0
      }), TweenMax.to(sprite.midLocker_fore, 1, {
         alpha: 0
      }), TweenMax.to(".downPage", 1, {
         opacity: 0,
         x: 50
      })]),
      po = new ScrollScene({
         duration: 1,
         offset: 7260
      }).setTween(no).addTo(controller),
      so = (new TimelineMax).add([TweenMax.to(sprite.textConclusion, 1, {
         alpha: 1
      }), TweenMax.to(sprite.textConclusionTwo, 1, {
         alpha: 1
      })]),
      lo = new ScrollScene({
         duration: 60,
         offset: 7055
      }).setTween(so).addTo(controller),
      wo = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
         y: distanceY(780),
         ease: Power1.easeOut
      }), TweenMax.to($(".shaders"), 1, {
         y: distanceY(780),
         ease: Power1.easeOut
      })]);
   new ScrollScene({
      duration: 780,
      offset: 0
   }).addTo(controller).setTween(wo);
   var xo = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -3840,
      ease: Linear.easeNone
   }), TweenMax.to($(".shaders"), 1, {
      y: -3840,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 1300,
      offset: 760
   }).addTo(controller).setTween(xo);
   var ho = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -5680,
      ease: Power1.easeInOut
   }), TweenMax.to($(".shaders"), 1, {
      y: -5680,
      ease: Power1.easeInOut
   })]);
   new ScrollScene({
      duration: 1400,
      offset: 2104
   }).addTo(controller).setTween(ho);
   var co = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -6654,
      ease: Power1.easeInOut
   }), TweenMax.to($(".shaders"), 1, {
      y: -6654,
      ease: Power1.easeInOut
   })]);
   new ScrollScene({
      duration: 1e3,
      offset: 3504
   }).addTo(controller).setTween(co);
   var To = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -7620,
      ease: Linear.easeNone
   }), TweenMax.to($(".shaders"), 1, {
      y: -7620,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 400,
      offset: 4500
   }).addTo(controller).setTween(To);
   var _o = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -9e3,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 900,
      offset: 4900
   }).addTo(controller).setTween(_o);
   var Mo = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -9100,
      ease: Linear.easeNone
   })]);
   new ScrollScene({
      duration: 360,
      offset: 5800
   }).addTo(controller).setTween(Mo);
   var Mo = (new TimelineMax).add([TweenMax.to(assetWrap.position, 1, {
      y: -10796,
      ease: Power1.easeInOut
   })]);
   new ScrollScene({
      duration: 800,
      offset: 6160
   }).addTo(controller).setTween(Mo), depthOrder()
}
function resizeIntro() {
   winDimension = dimensions(), renderer.resize(winDimension.width, winDimension.height), assetWrap.x = winDimension.width / 2;
   for (var e in outlie) outlie[e].width = winDimension.width, outlie[e].position.x = -1 * (winDimension.width / 2);
   sprite.lockers.position.y = 10819 + (winDimension.height - 636), sprite.openLocker_back.position.y = 10819 + (winDimension.height - 636), sprite.openLocker_fore.position.y = 10819 + (winDimension.height - 636), sprite.midLocker_back.position.y = 10819 + (winDimension.height - 636), sprite.midLocker_fore.position.y = 10819 + (winDimension.height - 636), box.lockerBarTwo.position.y = 11401 + (winDimension.height - 636), sprite.textConclusion.position.y = box.lockerBarTwo.position.y - 300, sprite.textConclusionTwo.position.y = sprite.textConclusion.position.y + 40, box.lockerBarOne.clear(), box.lockerBarOne.beginFill(14145495), box.lockerBarOne.drawRect(0, 0, winDimension.width, 33), box.lockerBarOne.endFill(), box.lockerBarOne.position.x = -1 * (winDimension.width / 2), box.lockerBarTwo.clear(), box.lockerBarTwo.beginFill(14145495), box.lockerBarTwo.drawRect(0, 0, winDimension.width, 33), box.lockerBarTwo.endFill(), box.lockerBarTwo.position.x = -1 * (winDimension.width / 2), box.cloudBg.clear(), box.cloudBg.beginFill(16777214), box.cloudBg.drawRect(0, 0, winDimension.width, 990), box.cloudBg.endFill(), box.cloudBg.position.x = -1 * (winDimension.width / 2), box.hillsBg.clear(), box.hillsBg.beginFill(2967328), box.hillsBg.drawRect(0, 0, winDimension.width, 1020), box.hillsBg.endFill(), box.hillsBg.position.x = -1 * (winDimension.width / 2), box.cottageBg.clear(), box.cottageBg.beginFill(11959625), box.cottageBg.drawRect(0, 0, winDimension.width, 1e3), box.cottageBg.endFill(), box.cottageBg.position.x = -1 * (winDimension.width / 2), box.caveBg.clear(), box.caveBg.beginFill(5789786), box.caveBg.drawRect(0, 0, winDimension.width, 2600), box.caveBg.endFill(), box.caveBg.position.x = -1 * (winDimension.width / 2), box.sunTile.width = winDimension.width, box.sunTile.position.x = -1 * (winDimension.width / 2), birdRight = winDimension.width / 2, birdLeft = -1 * (winDimension.width / 2) - 500, sprite.birdLeft_down.position.x = birdRight, sprite.birdLeft_up.position.x = birdRight, sprite.birdLeftNone_up.position.x = birdRight, sprite.birdLeftNone_down.position.x = birdRight, resizeLays()
}
function rectangle(e, o, i, t, a, r, n, p, s) {
   return box[p] = new PIXI.Graphics, box[p].beginFill(a), box[p].lineStyle(n, r), box[p].drawRect(0, 0, i - n, t - n), box[p].endFill(), box[p].position.x = e + n / 2, box[p].position.y = o + n / 2, box[p].z = s, box[p]
}
function homePagination(e) {
   trackpad.lock(), autoScrolling = !0;
   var o = trackpad.value,
      i;
   if ("up" == e && o >= -482) fauxDirection = 1, toWhere = 0, mSpeed = 12;
   else for (var t in pages) {
      if (o <= pages[t].rangeMin && o >= pages[t].rangeMax) {
         i = 1 * t, "up" == e ? (fauxDirection = 1, toWhere = pages[i - 1].location, mSpeed = 12) : (fauxDirection = 0, toWhere = pages[i + 1].location, mSpeed = -12);
         break
      }
      if (-14628 >= o) {
         fauxDirection = 1, toWhere = pages[5].location, mSpeed = 12;
         break
      }
   }
}
function pageDone() {
   autoScrolling = !1, trackpad.unlock()
}
function goldBergCanvas() {
   function e() {
      autoScrolling === !0 && (0 === fauxDirection && trackpad.value <= toWhere ? pageDone() : 1 === fauxDirection && trackpad.value >= toWhere ? pageDone() : trackpad.speed = mSpeed), trackpad.update(), cam.y += Math.floor(.5 * (trackpad.value * -.5 - cam.y)), renderer.render(stage), requestAnimFrame(e)
   }
   $(".authFn").on("mouseover", function() {
      trackpad.lock()
   }), $(".authFn").on("mouseout", function() {
      trackpad.unlock()
   }), $(".homePaginate div").on("mouseover", function() {
      trackpad.lock()
   }), $(".homePaginate div").on("mouseout", function() {
      trackpad.unlock()
   }), $(".homePaginate .upPage").on("click", function() {
      homePagination("up")
   }), $(".homePaginate .downPage").on("click", function() {
      homePagination("down")
   }), TweenLite.defaultOverwrite = !1, TweenMax.defaultOverwrite = !1, retina = 1, trackpad = new Trackpad(document), trackpad.lock(), winDimension = dimensions(), stage = new PIXI.Stage(46054, !0), renderer = PIXI.autoDetectRenderer(winDimension.width, winDimension.height, {
      resolution: retina
   }), $(".pageWrap.intro").prepend(renderer.view), renderer.view.className = "pixi", loadAsset(), requestAnimFrame(e)
}
function homeStickyHeader() {
   var e = $(window).scroll(function() {
      var e = $(window).scrollTop();
      e > 130 ? ($("header nav").addClass("fixMe"), TweenMax.to(".pageWrap header nav", .2, {
         backgroundColor: "#f2f2f2"
      })) : ($("header nav").removeClass("fixMe"), TweenMax.to(".pageWrap header nav", .1, {
         backgroundColor: "#00b3e6"
      }))
   })
}
function watchE() {
   if ($("footer.intro").length > 0 && iOSnoiPad === !1 && 0 === screenSize && $(".shaders").length > 0 && (pixiOptionsExtended(), goldBergCanvas()), $(".stickly").length > 0 && stickyHeader(), $(".aMap").length > 0 && runGmap(), 0 === $("footer.intro").length && $(window).width() > 650 && homeStickyHeader(), $(window).width() < 650) {
      var e = $(".current_page_item").html();
      $(".acceptMe").html(e);
      var o = $(".current_page_item ul.sub-menu").html();
      $("ul.sub-menu").remove(), $("section:eq(0) .center:eq(0)").prepend('<ul class="newsub-menu"></ul>'), $("ul.newsub-menu").prepend(o), saveSpace(), $(".pageWrap.intro").length > 0
   }
   $("h2.blog").length > 0 && $(".menu-main-container ul.menu li.menu-item-object-page:eq(4)").addClass("current-menu-item"), $(".hsection a.register").css("background", "#000000"), $("#contactFrm").validate(), $(".dOne").dropkick(), $(".dTwo").dropkick(), $(".dThree").dropkick(), $(".dFour").dropkick(), $(".dFive").dropkick(), l = Ladda.create(document.querySelector(".ladda-button")), watchVal()
}
var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
   iOSnoiPad = /(iPhone|iPod)/g.test(navigator.userAgent),
   winDimension, timeDown, timeUp, stage, renderer, maskOneRendererBottom, dropRenderer, maskOneRendererTop, maskTwoRenderer, fauxGearRenderer, resizeWrap, trackpad, assetWrap, tearsWrap, backgroundWrap, spriteWrap, retina, gifSprite, birdRight, birdLeft, birdRightScene, birdRightTween, birdLeftScene, birdFlyAnim, birdFlyTween, lastShirtFallTween, lastShirtFallScene, introArrowAnimOne, introArrowAnimTwo, tvUpdate, alphaFilterGrate, alphaFilterSpill, testmaskBg, bellTween, sprite = [],
   dropSprite = [],
   outlie = [],
   gifSprites = [],
   box = [],
   loadingCheck = 0,
   bellRing = 0,
   screenSize = 0,
   lastScroll = 0,
   lastDirect = 0,
   ua = window.navigator.userAgent;
(isIE10 || ua.indexOf("Trident/7.0") > 0) && ($(".authFn").addClass("ie"), $(".ieLate").addClass("active"));
var cam = new PIXI.Point,
   controller = new ScrollMagic;
$(".mButton").click(function() {
   if ($(".iosErr").hasClass("active") && ($("body").css("overflow", "visible"), $(".iosErr").removeClass("active")), "block" == $(".overlaySp").css("display") && $(".overlaySp").css("display", "none"), $(this).hasClass("active")) $(this).removeClass("active"), $("nav").removeClass("active"), $(".pageWrap.intro").length > 0 && (TweenMax.to($(".authFn"), .2, {
      opacity: 1
   }), $(".authFn").css("pointer-events", "all"));
   else {
      $(".pageWrap.intro").length > 0 && (TweenMax.to($(".authFn"), .2, {
         opacity: 0
      }), $(".authFn").css("pointer-events", "none"));
      var e = (new TimelineMax).add([TweenMax.to($("header"), .4, {
         height: "240px"
      }), TweenMax.to($(".mobileSpacer.mobile"), .4, {
         height: "240px"
      })]).add(TweenMax.to($("header"), .01, {
         overflow: "visible"
      })).add(TweenMax.to($(".acceptMe.mobile a:eq(0)"), .1, {
         "border-bottom": "20px solid #00b3e6"
      }));
      $(this).addClass("active"), $("nav").addClass("active")
   }
   $("body").css("overflow", "visible")
}), $("p.question").click(function() {
   $(this).parent().hasClass("active") ? $(this).parent().removeClass("active") : $(this).parent().addClass("active")
}), $(".exitSp").click(function() {
   $(".overlaySp").fadeOut("fast", function() {
      $("body").css("overflow", "visible")
   })
}), $(".overlaySp").click(function() {
   $(this).fadeOut("fast", function() {
      $("body").css("overflow", "visible")
   })
}), $(".overlaySp").children().click(function(e) {
   e.stopPropagation()
});
var submitContact = function() {
      l.start();
      var e = $("#contactFrm").serialize();
      $.ajax({
         url: ajaxUrl + "/register-process.php",
         type: "post",
         data: e,
         dataType: "script",
         success: contactSuccess,
         error: contactFailure
      })
   };
$.fn.ToggleInputValue = function() {
   return $(this).each(function() {
      var e = $(this),
         o = e.val();
      e.focus(function() {
         e.val() == o && e.val("")
      }).blur(function() {
         0 == e.val().length && e.val(o)
      })
   })
}, AmenityMap.prototype = {
   init: function() {
      var e = this,
         o = {
            scrollwheel: !1,
            zoom: 13,
            center: this.initial_latlng,
            mapTypeControl: !1,
            zoomControl: !0,
            zoomControlOptions: {
               style: google.maps.ZoomControlStyle.SMALL
            },
            panControl: !1,
            streetViewControl: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
               featureType: "all",
               stylers: [{
                  saturation: -100
               }]
            }]
         };
      this.map = new google.maps.Map(e.map_div, o), this.setPoints()
   },
   setPoints: function() {
      for (var e = 0; e < this.points.length; e++) {
         var o = this.points[e],
            i = this.createPoint(o.lat, o.lng),
            t = this.createMarker(i, o);
         this.marker_array[e] = t
      }
      var a = new google.maps.MarkerImage(ajaxUrl + "/img/marker.png", new google.maps.Size(98, 40), new google.maps.Point(0, 0)),
         r = new google.maps.LatLng(43.64925, -79.37421),
         n = new google.maps.Marker({
            position: r,
            map: this.map,
            icon: a,
            zIndex: 1
         });
      this.marker_array[this.points.length] = n, this.addMarkersToMap()
   },
   addMarkersToMap: function() {
      if (this.marker_array.length > 0) for (var e = 0; e < this.marker_array.length; e++) this.marker_array[e].setMap(this.map)
   },
   createPoint: function(e, o) {
      var i = new google.maps.LatLng(parseFloat(e), parseFloat(o));
      return i
   },
   createMarker: function(e, o) {
      var t = this;
      if (1 === screenSize) var a = "_mobile";
      else var a = "";
      if ("privateRes" === o.mtype) var r = new google.maps.Marker({
         position: e,
         map: this.map,
         icon: ajaxUrl + "/img/map/marker_blue" + a + ".png",
         visible: !0,
         zIndex: 2,
         hookMeLater: "privateRes"
      });
      if ("commercial" === o.mtype) var r = new google.maps.Marker({
         position: e,
         map: this.map,
         icon: ajaxUrl + "/img/map/marker_yellow" + a + ".png",
         visible: !0,
         zIndex: 2,
         hookMeLater: "commercial"
      });
      if ("publicDepot" === o.mtype) var r = new google.maps.Marker({
         position: e,
         map: this.map,
         icon: ajaxUrl + "/img/map/marker_pink" + a + ".png",
         visible: !0,
         zIndex: 2,
         hookMeLater: "publicDepot"
      });
      var n = document.createElement("div"),
         p = new google.maps.Size(-32, -355);
      if (n.style.cssText = 0 === screenSize ? "font-size: 20px; padding: 16px 0 0 0; background-color:#000000; color: #ffffff; font-family: 'novecento_wide_bookbold'; max-width: 300px;" : "font-size: 20px; padding: 16px 0 0 0; background-color:#000000; color: #ffffff; font-family: 'novecento_wide_bookbold'; max-width: 450px;", n.innerHTML = "" + o.name, p = new google.maps.Size(22, -41), 0 === screenSize) var s = {
         content: n,
         pixelOffset: p,
         boxStyle: {
            opacity: 1
         },
         closeBoxURL: ajaxUrl + "/img/map/exit.png",
         closeBoxMargin: "0px -30px 0 0"
      };
      else var s = {
         content: n,
         pixelOffset: p,
         boxStyle: {
            opacity: 1
         },
         closeBoxURL: ajaxUrl + "/img/map/mapExitMobile.png",
         closeBoxMargin: "0px -50px 0 0"
      };
      var d = new InfoBox(s);
      this.ibArray[this.ibCount] = d, this.ibCount = this.ibCount + 1;
      var l = this.ibArray,
         w = this.marker_array;
      return google.maps.event.addListener(r, "click", function() {
         for (i = 0; i < l.length; i++) myBox = l[i], myBox.close();
         for (i = 0; i < w.length - 1; i++) tMarklake = w[i], "privateRes" === w[i].hookMeLater && tMarklake.setIcon(ajaxUrl + "/img/map/marker_blue" + a + ".png"), "commercial" === w[i].hookMeLater && tMarklake.setIcon(ajaxUrl + "/img/map/marker_yellow" + a + ".png"), "publicDepot" === w[i].hookMeLater && tMarklake.setIcon(ajaxUrl + "/img/map/marker_pink" + a + ".png");
         r.setIcon(ajaxUrl + "/img/map/marker_grey" + a + ".png"), d.open(this.map, this)
      }), google.maps.event.addListener(d, "closeclick", function() {
         for (i = 0; i < w.length - 1; i++) tMarklake = w[i], "privateRes" === w[i].hookMeLater && tMarklake.setIcon(ajaxUrl + "/img/map/marker_blue" + a + ".png"), "commercial" === w[i].hookMeLater && tMarklake.setIcon(ajaxUrl + "/img/map/marker_yellow" + a + ".png"), "publicDepot" === w[i].hookMeLater && tMarklake.setIcon(ajaxUrl + "/img/map/marker_pink" + a + ".png")
      }), r
   },
   killMarker: function() {
      if (this.marker_array.length > 0) for (var e = 0; e < this.marker_array.length; e++) this.marker_array[e].setMap(null);
      for (e = 0; e < this.ibArray.length; e++) myBox = this.ibArray[e], myBox.close();
      this.marker_array.length = 0
   }
}, $(window).on("hashchange", function() {
   discoverHash()
});
var dimensions = function() {
      var e = {};
      return e.width = $(window).outerWidth() < 1024 ? 1024 : $(window).outerWidth(), e.height = $(window).outerHeight(), e
   },
   pages = [{
      location: 0,
      rangeMin: 0,
      rangeMax: -314,
      speed: 1,
      next: "services",
      prev: "home"
   }, {
      location: -478,
      rangeMin: -314,
      rangeMax: -1882,
      speed: 1,
      next: "how",
      prev: "home"
   }, {
      location: -2025,
      rangeMin: -1882,
      rangeMax: -2619,
      speed: 1,
      next: "locations",
      prev: "services"
   }, {
      location: -3037,
      rangeMin: -2619,
      rangeMax: -5955,
      speed: 1,
      next: "faq",
      prev: "how"
   }, {
      location: -8122,
      rangeMin: -5955,
      rangeMax: -9552,
      speed: 1,
      next: "blog",
      prev: "locations"
   }, {
      location: -10655,
      rangeMin: -9552,
      rangeMax: -11382,
      speed: 1,
      next: "tada",
      prev: "faq"
   }, {
      location: -14630,
      rangeMin: -11382,
      rangeMax: -14630,
      speed: 1,
      next: "tada",
      prev: "blog"
   }],
   autoScrolling = !1,
   mSpeed, toWhere, fauxDirection;
$(document).ready(function() {
   $(window).resize(function() {
      delay(function() {
         void 0 != renderer && resizeIntro()
      })
   }), $(window).width() < 650 && (timeUp = new TimelineMax({
      paused: !0
   }).add([TweenMax.to($("header"), .4, {
      height: "240px"
   }), TweenMax.to($(".mobileSpacer.mobile"), .4, {
      height: "240px"
   })]).add([TweenMax.to($("header"), .01, {
      overflow: "visible"
   }), TweenMax.to($(".authFn"), .4, {
      y: 0,
      opacity: 1,
      delay: .25
   }), TweenMax.to($(".acceptMe.mobile a:eq(0)"), .1, {
      "border-bottom": "20px solid #00b3e6"
   })]), timeDown = new TimelineMax({
      paused: !0
   }).add(TweenMax.to($(".acceptMe.mobile a:eq(0)"), .1, {
      "border-bottom": "0px solid #00b3e6"
   })).add([TweenMax.to($("header"), .01, {
      overflow: "hidden"
   }), TweenMax.to($(".authFn"), .4, {
      y: 132,
      opacity: 0,
      delay: .25
   }), TweenMax.to($("header"), .4, {
      height: "180px"
   }), TweenMax.to($(".mobileSpacer.mobile"), .4, {
      height: "180px"
   })]), screenSize = 1, $(".pageWrap.intro").length > 0 && $(".authFn.mobile").css("z-index", "99999999"), iOS === !1 && ($(".pageWrap.intro").css("overflow", "hidden"), $(".pageWrap.intro").css("overflow-y", "scroll"), $(".pageWrap.intro").css("min-height", "100%"), $(".pageWrap.intro").css("-webkit-overflow-scrolling", "touch"))), watchE(), photoGallery(), loadTw