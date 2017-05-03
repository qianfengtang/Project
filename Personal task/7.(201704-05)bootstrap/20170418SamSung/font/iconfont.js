;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.537124 59.514465c-245.504286 0-444.929252 200.63146-444.929252 448.219371 0 247.518327 199.424966 448.149786 444.929252 448.149786 245.657788 0 444.793147-200.63146 444.793147-448.149786C955.330271 260.145925 756.194912 59.514465 510.537124 59.514465zM232.4392 787.123035c0.680527 8.659217-5.73996 13.734816-14.356551 13.734816l-1.558559 0c-8.015886 0-14.783287-2.726088-15.567172-10.942213-11.919959-133.700071 30.003544-226.598878 67.459109-282.520515 13.477495-20.298302 27.302928-36.159548 39.812336-49.472761-3.142702-7.1744-4.876254-14.755052-4.876254-23.159466 0-32.498158 26.263206-58.56586 58.509929-58.56586 32.420692 0 58.415781 26.377764 58.415781 58.875922 0 32.68747-25.996112 59.017138-58.415781 59.017138-12.42754 0-23.896202-3.897773-33.471671-10.555403-11.029646 11.874445-23.017146 25.113981-34.694572 42.805922C244.080809 601.13918 223.303771 687.924755 232.4392 787.123035zM359.251477 616.384395c-13.279989 0-26.769764-1.488911-39.635296-4.376681-8.500953-2.025123-13.559363-10.521634-11.805344-18.927071 2.068187-8.591679 10.325583-13.945617 18.768205-11.919471 10.601887 2.445702 21.632556 3.678786 32.672436 3.678786 80.153742 0 145.28064-65.627696 145.28064-146.224316 0-80.622202-65.127922-146.247852-145.28064-146.247852-79.968516 0-145.176259 65.62565-145.176259 146.247852 0 23.37129 5.32448 45.910633 15.926367 66.674539 4.077019 7.705496 1.028465 17.250896-6.882016 21.185508-7.726278 4.143367-17.035676 1.069355-21.032874-6.750751-12.773431-24.863271-19.380167-53.080939-19.380167-81.109296 0-98.128925 79.182585-177.954995 176.543926-177.954995 97.456512 0 176.650354 79.82607 176.650354 177.954995C535.900807 536.578792 456.707989 616.384395 359.251477 616.384395zM687.614214 409.514861c-15.660296 0.37146-31.578477-2.981914-45.827576-9.824763-49.892315-23.887037-71.189212-84.182284-47.471073-134.468574 23.633202-50.28629 83.551258-71.752184 133.442549-47.842635 49.895385 23.839965 71.191259 84.300988 47.377948 134.397966-3.488594 6.940063-7.323079 13.504572-11.989547 19.464307-2.958499 3.841491-8.684132 4.561899-12.518618 1.489934-3.835509-3.071965-4.434167-8.776897-1.385613-12.618389 3.834485-4.819772 7.112269-10.335393 9.702364-16.039301 19.586883-41.252543 2.216572-90.956571-38.924069-110.397343-41.047517-19.71911-90.152877-2.188852-109.533043 39.321564-19.706615 41.299615-2.265693 90.792842 38.876995 110.48944 11.872885 5.634324 24.760931 8.42795 37.695028 7.891737 4.963238-0.069585 9.146686 3.795443 9.238787 8.775874C696.532693 405.137157 692.649087 409.255964 687.614214 409.514861zM826.416037 476.631468c-70.843321-26.375717-108.8167-71.052243-128.130349-103.994516-6.92909-11.917424-12.010014-23.209608-15.662343-32.870642-4.595856-0.068562-8.914386-1.304715-13.117276-3.14462-16.769606-8.077979-23.725303-27.863604-15.802542-44.582381 7.808146-16.668635 27.535228-23.74582 44.168729-15.783475 16.489208 7.963369 23.467419 27.866674 15.708394 44.512796-3.02911 6.310729-7.903318 11.385305-13.539919 14.525831 3.467103 8.778944 7.992349 18.486026 14.160068 28.845978 25.894801 43.883463 65.812541 76.05621 118.3103 95.589079 4.693075 1.837858 6.955697 6.822382 5.385881 11.478426-0.095171 0.417509-0.278351 0.603751-0.278351 0.884137C835.538162 476.188376 830.872718 478.214523 826.416037 476.631468z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M362.484736 186.295296 515.892224 186.295296 762.805248 504.431616 508.982272 814.168064 362.704896 814.168064 612.736 504.431616Z"  ></path>' +
    '' +
    '<path d="M610.075648 795.736064"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M899.322125 21.391 512.000125 408.714 124.677125 21.391c-28.52-28.521-74.763-28.521-103.286 0-28.522 28.521-28.521 74.764 0 103.286L408.714125 512 21.391125 899.322c-28.521 28.521-28.521 74.765 0 103.287 28.521 28.521 74.765 28.521 103.286 0L512.000125 615.286l387.322 387.323c28.521 28.521 74.765 28.521 103.287 0 28.521-28.521 28.521-74.766 0-103.287L615.286125 512l387.323-387.323c28.521-28.521 28.521-74.764 0-103.286C974.088125-7.13 927.845125-7.13 899.322125 21.391z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chaxun" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M690.1504 690.106368c-157.673472 157.679616-414.222336 157.679616-571.89376 0.016384-157.67552-157.663232-157.67552-414.185472 0-571.848704 157.669376-157.669376 414.21824-157.669376 571.89376 0C847.787008 275.93728 847.787008 532.457472 690.1504 690.106368L690.1504 690.106368zM206.447616 206.401536c-109.07648 109.053952-109.07648 286.513152-0.038912 395.567104 109.03552 109.053952 286.54592 109.031424 395.583488-0.016384 109.037568-109.053952 109.037568-286.480384 0-395.528192C492.956672 97.37216 315.446272 97.353728 206.447616 206.401536L206.447616 206.401536zM1001.532416 879.443968c29.958144 29.958144 29.958144 78.534656 0 108.496896l-13.559808 13.55776c-29.958144 29.976576-78.518272 29.976576-108.511232 0L601.467904 723.499008c-29.960192-29.976576-29.960192-78.534656 0-108.494848l13.565952-13.576192c29.954048-29.958144 78.553088-29.958144 108.511232 0L1001.532416 879.443968 1001.532416 879.443968zM1001.532416 879.443968"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M298.475 305.884c-21.134 0-42.434 13.959-42.434 35.184 0 21.151 21.334 35.276 42.434 35.276s35.236-14.149 35.236-35.276c0-21.226-14.060-35.184-35.236-35.184zM495.808 376.407c21.226 0 35.276-14.149 35.276-35.276 0-21.212-14.055-35.184-35.276-35.184-21.134 0-42.366 13.959-42.366 35.184 0 21.151 21.212 35.276 42.366 35.276zM587.481 510.434c-14.025 0-28.173 14.1-28.173 28.173 0 14.278 14.149 28.173 28.173 28.173 21.39 0 35.329-13.948 35.329-28.173 0-14.055-13.956-28.173-35.329-28.173zM742.558 510.434c-13.956 0-27.999 14.1-27.999 28.173 0 14.278 14.055 28.173 27.999 28.173 21.082 0 35.276-13.948 35.276-28.173 0-14.055-14.22-28.173-35.276-28.173zM521.678 28.512c-267.808 0-484.979 217.090-484.979 484.979s217.090 484.979 484.979 484.979 484.979-217.090 484.979-484.979-217.090-484.979-484.979-484.979zM390.069 665.696c-35.184 0-63.457-7.197-98.777-14.149l-98.575 49.426 28.173-84.801c-70.591-49.339-112.842-112.946-112.842-190.354 0-134.159 126.959-239.788 281.952-239.788 138.634 0 260.085 84.41 284.448 198.011-8.975-0.976-18.020-1.635-27.14-1.635-133.962 0-239.766 99.954-239.766 223.134 0 20.502 3.203 40.23 8.723 59.094-8.669 0.622-17.428 1.062-26.249 1.062zM805.99 764.47l21.226 70.425-77.347-42.366c-28.211 7.081-56.548 14.149-84.635 14.149-134.159 0-239.81-91.649-239.81-204.615 0-112.746 105.653-204.615 239.81-204.615 126.722 0 239.527 91.926 239.527 204.615 0 63.6-42.158 119.925-98.777 162.39z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinlangweibo" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M374.033391 611.592665c-20.801748 2.177593-35.716421 20.292142-35.716421 37.640234 0 17.411538 16.771972 29.382162 37.572696 26.949765 20.740349-2.367928 37.644328-18.368328 37.644328-35.716421C413.535018 623.114058 397.974639 609.350603 374.033391 611.592665L374.033391 611.592665zM426.91064 597.254112c-7.169276 5.186111-8.643859 15.041563-4.73688 21.255072 3.711528 6.334259 12.419855 7.042386 19.462241 1.792831 6.91038-5.440914 9.538228-14.915696 5.822606-21.255072C443.746056 592.903019 435.170759 591.110188 426.91064 597.254112L426.91064 597.254112zM426.145207 481.006644c-110.875116 5.118572-200.557581 64.457993-200.557581 138.45933 0 73.938915 89.619021 129.50234 200.557581 124.320323 111.002006-5.059221 200.812384-74.3861 200.812384-148.323992C626.957592 521.587858 537.147213 475.882955 426.145207 481.006644L426.145207 481.006644zM501.679456 667.158136c-33.92973 43.788252-101.14246 65.165097-166.43854 29.830369-31.047079-16.834393-29.893814-49.864638-29.893814-49.864638s-12.864993-104.345405 98.648666-117.403803C515.701806 516.78651 535.671607 623.372954 501.679456 667.158136L501.679456 667.158136zM512.117168 0c-282.818015 0-512.117168 229.172264-512.117168 511.921717 0 282.75457 229.299154 511.926834 512.117168 511.926834 282.812898 0 512.112052-229.172264 512.112052-511.926834C1024.22922 229.172264 794.930066 0 512.117168 0L512.117168 0zM726.051395 644.496019c-45.707972 96.985795-196.460267 144.227701-308.166307 135.454906-106.199634-8.321518-242.680916-43.593824-256.760572-171.941875 0 0-7.491617-58.123734 48.970269-133.340758 0 0 81.107168-113.180622 175.653403-145.50581 94.611727-32.135876 105.626584 22.2794 105.626584 54.41016-5.060244 27.272106-14.468512 43.340044 20.995152 32.327234 0 0 92.950902-43.081148 131.231726-4.864793 30.850604 30.856744 5.118572 73.297303 5.118572 73.297303s-12.802571 14.148217 13.572097 19.267813C688.728385 508.849755 771.756297 547.32603 726.051395 644.496019L726.051395 644.496019zM634.381671 376.466811c-10.115372 0-18.241438-8.189511-18.241438-18.241438 0-10.178817 8.126066-18.374468 18.241438-18.374468 0 0 114.0095-21.058597 100.373958 101.273443 0 0.704034-0.064468 1.280155-0.254803 1.919721-1.279131 8.639766-8.898662 15.301482-17.924213 15.301482-10.177793 0-18.372421-8.131183-18.372421-18.246555C698.204191 440.162442 716.255295 358.415708 634.381671 376.466811L634.381671 376.466811zM827.065942 474.281483l-0.191358 0c-3.007494 20.678951-13.31934 22.408337-25.54272 22.408337-14.661917 0-26.499511-9.221003-26.499511-23.877803 0-12.672611 5.245462-25.605142 5.245462-25.605142 1.539051-5.314024 13.957883-38.53972-8.190535-88.214023-40.457393-67.984303-122.078261-69.003515-131.743378-65.101652-9.728562 3.773949-24.068138 5.698787-24.068138 5.698787-14.726385 0-26.569096-11.970624-26.569096-26.568072 0-12.22338 8.195651-22.597648 19.398796-25.733055 0 0 0.254803-0.384763 0.640589-0.512676 0.8299-0.190335 1.596356-1.020235 2.494818-1.088797 11.330035-2.172477 51.85292-10.115372 91.284962-0.894369C773.807001 261.309163 870.596321 329.356911 827.065942 474.281483L827.065942 474.281483zM827.065942 474.281483"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-faqiqunliao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M874.144 562.176c-3.584 0-7.264-0.8-10.688-2.528-11.872-5.92-16.672-20.352-10.752-32.192 47.616-95.36 30.304-189.984-47.488-259.488-97.056-86.72-283.296-125.088-437.12-25.376-11.136 7.264-25.984 4.064-33.184-7.072-7.232-11.136-4.064-25.984 7.072-33.184C515.872 89.6 726.88 133.536 837.216 232.16c93.792 83.808 115.616 202.208 58.432 316.704C891.456 557.28 882.976 562.176 874.144 562.176z"  ></path>' +
    '' +
    '<path d="M458.656 888.096c-7.392 0-14.4-3.424-18.976-9.28l-41.76-53.76c-175.584-24.896-301.344-142.272-301.344-280.224 0-156.416 162.4-283.648 362.016-283.648 199.648 0 362.048 127.264 362.048 283.648 0 137.952-125.76 255.328-299.04 279.104l-44.032 54.88C473.056 884.672 466.048 888.096 458.656 888.096zM458.624 309.184c-173.152 0-314.016 105.728-314.016 235.648 0 113.696 108.32 211.072 257.568 231.552 13.344 1.792 25.696 8.8 33.76 19.296l22.752 29.28 22.784-29.376c7.968-10.368 20.32-17.408 33.792-19.232 149.152-20.48 257.472-117.856 257.472-231.52C772.672 414.912 631.808 309.184 458.624 309.184z"  ></path>' +
    '' +
    '<path d="M268.896 559.456m-47.488 0a1.484 1.484 0 1 0 94.976 0 1.484 1.484 0 1 0-94.976 0Z"  ></path>' +
    '' +
    '<path d="M458.656 559.456m-47.488 0a1.484 1.484 0 1 0 94.976 0 1.484 1.484 0 1 0-94.976 0Z"  ></path>' +
    '' +
    '<path d="M648.416 559.456m-47.488 0a1.484 1.484 0 1 0 94.976 0 1.484 1.484 0 1 0-94.976 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-compute" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M974.457905 806.13181 726.698667 806.13181l-66.048 0 0 81.724952 66.048 65.340952 0 16.335238L297.301333 969.532952l0-16.335238 66.048-65.340952 0-81.724952-66.048 0L49.566476 806.13181c-27.37981 0-49.542095-21.942857-49.542095-49.054476L0.024381 103.497143c0-27.062857 22.162286-49.030095 49.542095-49.030095l924.891429 0c27.37981 0 49.566476 21.942857 49.566476 49.030095l0 653.604571C1024.024381 784.188952 1001.837714 806.13181 974.457905 806.13181zM957.927619 119.856762 66.072381 119.856762l0 555.593143 891.855238 0L957.927619 119.856762z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M437 662h150v225h-150z"  ></path>' +
    '' +
    '<path d="M212 849.4c0 20.8 16.8 37.4 37.4 37.4h113.8c-0.4-2.4-1.4-4.8-1.4-7.4V627.8c0-22.6 16.8-40.8 37.4-40.8h225c20.8 0 37.4 18.2 37.4 40.8v251.8c0 2.6-1 4.8-1.4 7.4H774c20.8 0 37.4-16.8 37.4-37.4V512H212v337.4zM882.8 337.6l-62-175.4c-5.4-15-19.4-25-35.4-25H238.6c-15.8 0-30 10-35.4 25l-62 175.6c-8 22.8-4.6 47.2 9.4 67.2 14 19.8 36.8 31.6 61.4 32.2v0.2h600v-0.2c24.4-0.6 47.4-12.4 61.4-32.2 14-20.2 17.4-44.6 9.4-67.4z m-483.4-102.8l-35.8 112.4c-4 8.8-20 14.8-37.8 14.8-2.8 0-5.4-0.2-8.2-0.4-21-2.2-34.2-12.2-29.6-22.2l35.8-112.4c4.6-10.2 25.2-16.4 46.2-14.4 20.8 2 34 12 29.4 22.2z m150 108.4c0 10.4-16.8 18.8-37.4 18.8-20.8 0-37.4-8.4-37.4-18.8v-112.4c0-10.4 16.8-18.8 37.4-18.8 20.8 0 37.4 8.4 37.4 18.8v112.4z m157 18.4c-2.8 0.2-5.6 0.4-8.2 0.4-17.8 0-34-6-37.8-14.8l-35.8-112.4c-4.6-10.2 8.8-20.2 29.6-22.4 21-2.2 41.6 4.2 46.2 14.4l35.8 112.4c4.4 10.2-8.8 20.2-29.8 22.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lianxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M458.967919 564.962263c-67.458586-67.422384-131.942141-145.546343-101.017858-176.395637 44.152242-44.194909 82.660848-71.40202 4.385616-168.816485-78.237737-97.45196-130.456566-22.632727-173.274505 20.221415-49.361455 49.396364-2.605253 233.52501 179.40299 415.569454C550.436202 837.511758 734.637253 884.305455 784.071111 834.871596c42.817939-42.779152 117.598384-94.963071 20.182626-173.234424-97.342061-78.310141-124.656485-39.805414-168.852686 4.345535-30.960485 30.813091-108.97196-33.598061-176.433132-101.020444m0 0" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-open-blank" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M810.666667 810.666667H213.333333V213.333333h298.666667V128H213.333333c-47.146667 0-85.333333 38.186667-85.333333 85.333333v597.333334c0 47.146667 38.186667 85.333333 85.333333 85.333333h597.333334c47.146667 0 85.333333-38.186667 85.333333-85.333333V512h-85.333333v298.666667zM597.333333 128v85.333333h152.96L330.88 632.746667l60.373333 60.373333L810.666667 273.706667V426.666667h85.333333V128H597.333333z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)