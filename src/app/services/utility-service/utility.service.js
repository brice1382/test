(function () {
    'use strict';

    angular
        .module('utility-service')
        .provider('UtilitySvc', function () {

            this.$get = ['$rootScope', function($rootScope) {

                $rootScope.isLoading = false;
                $rootScope.punchedIn = false;

                return {
                    startSpinner: startSpinner,
                    stopSpinner: stopSpinner,
                    isPunchedIn: isPunchedIn,
                    isPunchedOut: isPunchedOut,
                    encodeImageFileAsURL: encodeImageFileAsURL,
                    myString: myString
                };

                function startSpinner() {
                    $rootScope.isLoading = true;
                }

                function stopSpinner() {
                    $rootScope.isLoading = false;
                }

                function isPunchedIn() {
                    $rootScope.punchedIn = true;
                    var punch = 'true';
                    localStorage.setItem('punch', punch);
                }

                function isPunchedOut() {
                    $rootScope.punchedIn = false;
                    var punch = 'false';
                    localStorage.setItem('punch', punch);
                }

                function encodeImageFileAsURL(element) {
                    var input = document.querySelector("input");
                    var file = input.files[0];
                    var reader = new FileReader();
                    reader.onloadend = function() {
                        console.log('RESULT', reader.result)
                    };
                    reader.readAsDataURL(file);
                }

                function myString() {
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAB8CAYAAACbksWfAAAB" +
                        "fGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgx" +
                        "SCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZ" +
                        "xSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwD" +
                        "ZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQy" +
                        "zB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9Hwcj" +
                        "A0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSi" +
                        "xLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4Ix" +
                        "rEg8AAAGdaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb" +
                        "2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5" +
                        "zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgI" +
                        "CAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY" +
                        "9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYR" +
                        "GltZW5zaW9uPjEwMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGV" +
                        "sWURpbWVuc2lvbj4xMjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjc" +
                        "mlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K79HQcgAAQABJREFUeAGNvVm3ZMl" +
                        "13xc5Z97MO9Rc1ahGoxsNkoKlRYigZL9Y9loSafpb4dt46dnLD5L1IEpaGmyayyRFgaIAAt2o7" +
                        "q75zjkP/v3+cc7tEpYhKaryZuY5MezY894RJ7Lz+Y9+eHj16nUZjcblZHZSFotF2e+2ZX84lOnR" +
                        "UVnM52Uw6Jd+f1gO+125ub4pnX63nJycltLplPV6VXa7fZnf3NBuV549eVoO3V65nd+U25vrst2u" +
                        "qVdKl3/9wbiMx5PS6/fKbrvlvVM2G9pvN6VDm7Ldl16vX7rUe/L0aXnz+nW5vr4qg16vDIbDcgQ" +
                        "8V9eX9DMsw0GvLFeLsl4s6bxbyn5fhvT94MHj0uP7CriE7QYYNqs1VXplPJmW0XhURvS1XC7KnLl" +
                        "2O91yenZcHj56VL5+8VVZcP3J0+flH/3BHzDHk/KP//H/Vua3t0y1U969fUMfY9qPGHtVNutN6dP" +
                        "v/rAv5VBy/XDYMY0N4OxyfTAYMKdeWS/XXANG2q+BR5xuNlvwsy3j0ah0wcmW62u+z2az0ndQJ7w" +
                        "GyMX8tvQ6PRAvknaOFeT75kCb9bas6Ww2npUDhOszoIhcLq65f6CfKcQ7ABBtIVaXyfT7fZszgX4" +
                        "ZAsCA7+vNhr4hwgGE1kFoty87Xt1BJxPZ7TZ83zJGN++rmxXXO2UEUXr9QdnRh8QV4Xs62TJen3e" +
                        "Jfth3IHSXSUNw2sATIKsibNSZAHtlgAH9rDfrslquKhwyGgh8/epV+T//6T8pH33no8zh6GgSIg9" +
                        "B5hpiDISBuW+KTCdRmATDONZ2zXdL5sXA3hAA3rzjPCWKxbvip9O1DgWY+zKZHxeLWziyy4BSD8S" +
                        "AaOaAFIA6XrU5kz3YuBMO68BlfAJhh0jLagmHNNzOpUib3FGBo5mfUzqRKoHr2HWAp9cGGDnPfjv" +
                        "c3ID0PkjuIxk9kY8UL1dzKsN1wz5jwyhwmAwTuIC7AOMKxDoHy2I5B+4d0iZTcA249xBQSVdyRJA" +
                        "MtJJTkS6ZZovUH59MIc7L8tO//Es0xDVaZB6JOZpNQ+wNTCOi7SeFN5lwAKwiWc3h/IODfUV05nr" +
                        "Ygq9t5isDt+UAnsWJfVjEQ1cVtUU6uBOu7vUGZctnudHJW0ScIu+grQSM4H7rqOpUe1s6VopUI/B" +
                        "rOpeTJUpEPT0piJVIErdLf5Eq2zTE6cAkGzh9s17CldaBMIMuKtDx9iHYZg2ngvAubRxX4vjZuis" +
                        "kwHaTySS4EwHC1YXDHUvCWFd1lrlR13nuQOZ0Oi1H00m5va3q2zaz41mk5PrqKswqc+/BVx1PikB" +
                        "sprllDNUdo1WiiHc1Av/RASFkaAFxwph2ZFvgiWQLP4wortL/FPXjhJhzLkozJwaVwqkizyLw4QK" +
                        "pCQBjJg4sUUuqmz71JZC2oOMNuKBLnwyXf3LjBGKqTyVKj36diATpcU/C+/K63CvyrcfsojZG6GY" +
                        "xrYrTdln6SII11NPWE5FtmWBPxpMj+hfGFXTc0Zwvjukn6jofpbGdo0Q41XZSxMkS+2V7JcvvgMo" +
                        "8B6gkVSHw8gp2mK9SsuN9J5NbuCHqOpoGxkxHXG6ZVBNQmVzGZQz69eVn8dhV9JlTOTmeYhBvMYj" +
                        "XZbfalunwiMloR4ZlMh4D3DCqQ8OldN3eXJTtZs59OXZdbrdzKE6nQzhQ4mmnoMwWDtmjfiArxId" +
                        "bHAxV1dXwI9baBGewzWcNIggEG5s1NgF9Du7KaoE25/sE2zabnJbZ2f0yOjqGyLMy5n0ymaHeMMp" +
                        "MdgzCF8tlubi6Rn0dA+sEdEjUEYTEEDOuHBopEvkrkM94OgLDI/pAYvogpgOitzgCO1T8vbN7sac" +
                        "rJZXSL0jvmnnADxJCNQtb5r3X57oEVBqY+3aL/ersIKQk5Ma+qs8B8+6CHwklCiyqOZlzjbboq56" +
                        "oHkA14JYZulTR3mBg+4jh/oCNAbUQn4IdoI0AKZKjESqBzqeHYTjwAPdW7qJXWUzNRbfRu6ox4Bu" +
                        "BIC86oV5XToGieIV7jLYwaH/kYplhiAfUmVWHoC/nAngHDqA17VFtwOhLW+HUtZP73bJyOVcmeGp" +
                        "6dXWeqBr6B+8pcqxe1Q61uISY2sljPKKr9+fBh/Df3t5EW2h7bDtBw+w2jOVglqYvkahTIZEj/Up" +
                        "YJu91K6m2Kzokhvht0B28SRQlReLZvlrJu1FoTus+On0F1TScHSa1QW9rT0SGUiCAeiWqIYmj4zB" +
                        "B1cj9y8bDqcBUwKM3aaPX1Q6lKrCObmcXThTQQR+ORdV1e7jUTKyOUVWeOt1iH1fv3wAoE+Va1CG" +
                        "TFk9RGbxLqBhZJiindru4+owlc1m03Rs0hfX7uLN6ePPDPMSRKedI0QDbO0aC9Hm6MIRqc44TMMT" +
                        "Wxb40E5GRQgjGYhDuyb1yY1DMx+ptiqs+Eh2bCGFalWZfEihOjEQFL3scBswDCLYXb9JApK8BTOO" +
                        "rPpWrdsQiEscB7aiPHWE8rmEEgUMuBaRwUn+s8dbVFuCGS2QEiojQrw/B4XrQQh0lrA8iRuX4+BS" +
                        "OnMT4bXHLY2tW9CVSAVKOlIDVc9xxH3eYe3SMm59Z1Lkg2mtgk5F0Riy2pWIIparV07IMnMAANUt" +
                        "fK9TZjNBhC6P1cYLGOAMrcKFdVGK27y8Ynz4lQlPEWUsYEexn1XIfw19tMtfEk94lBN5jCrS9cJj" +
                        "IL0Pw61wPW8wGocIQXCwTJsD5cr0v/sQ+YP4DQKcrUjSsFObt3J2nRmqJK7qG049nRwR7dK7Ludy" +
                        "Ws5N7ZatOzYQBRO+JgVVNcX8BZEW9/W4NQBu4clTOzs5Qb0rcECaAm7i+WYEouLr1DNFyIZDiPpl" +
                        "Ep5Yuk4v4c03TToUwBEOg2vAqkfI9AHe7qk0YBenpHAZhkNViFXiU3H6PoA/Gcj56ZGNsaow7MGu" +
                        "vdN11UHS51QpdbYtUaEr6pR9VXBc1HfvS3gSseI3gVKmRseVqCax0REJo5zyRy8BY+N4PVZkEpKZ" +
                        "R1bmtd6Ohl+sHDKay2EFV3d0bgtLRGFFHrJfUCXdha25uF+Xq4gJxx9im0GfeQSATadWbHDKm/Wx" +
                        "6hHuKizo+Cnct6XcxR4UicaqjNVyqlElU21YOPJTby9umf8HmPhPUmwuuqCeB1CZydmXuBg4ZsIM" +
                        "ew66pvkrBgwRxBq0HEK96u9ydhyhetxyA1XGdxxCpVqOAAoaQ7SmREpCulMJsfWztEHupNIcpqJK" +
                        "acFa8Pw01nVVic82B6EPPUhtKI1rALFbY87KotoYgWE6VQ/ShVVKKS+ZqvKCoUn/amyIpo3I1vyB" +
                        "1g2sKcm+uSXOAXEW2EiFWqUFYnYgcY8rh+BiPid6FS06VIKrEuL4gYwNR0hAO1Q2txrfaCPV/Co1" +
                        "tX51W4axF56EafO/U2KLgPaoJ/K6BNgWk+ovRBfHVoWFcCKZjo4tsFkScSCMdDQPbBS50DwaWWBY" +
                        "xFM5nXnGZwZEaBYp6MxKgVEtQGt4RIu25FLuYruindkkdaCGnGVBaIpIAOwdJRxg+VYbGzEjc3JM" +
                        "oMFc0mx7HUC7niwB+du+sXF/elGuCzUf37stO6c9Bq0qAo5moXpZxzpA+JdA1UbUxhkU1IANoHPs" +
                        "7IPNFe7sSPDQi34EFQm3R2Ra5TYQeHId37Ymk0IbxkSJK8fL8R1sRaNET9LP2brGQ9QyMK0zGO33" +
                        "qShTJaDHgkzDCr3MjUiPBrdQIB7WhSYW3YSQpwyjpo0qYMKiGxU8Vhqg2wWozBNYG+P4RMUCn0y9" +
                        "XRLZHxDJ9xHByjKEHJhOOF5eXEGmUHJKi6AQ2xC/JFYHUMfWTJIR4Zj2Qp/Lw4RPavWcSYBQE64Y" +
                        "i4xjWYbl//7i8fnNRVjdXSOYqkiAsAt666z2ItyERKBBdjWiIwjfGPkCUDnGRE1IWnNPAicDFKXI" +
                        "/XqVM0ao/60oEJcVxVGwSUQQrEQcllT5pwiDcpa5j39yQrsKjU5qPToyJGBcv0ljJnKGOwS19DHH" +
                        "zjI1UMjpK4+EsGQQZVzuq52cMsMWBMr7TMekyR+3i8naJ5hknnrJPNZZzThKTvEwAH2EbBC5iB1E" +
                        "n6P9rsslOQNHW2zJuMRjLgLQ7JQOrC7sGsCEqZkDcoXSJlA3v1jOWePDwfrybmxuchmRmq2FvdXW" +
                        "1QUqN+hf9jN0zXmmL6klOM2UjMSSLwKqORHhiHJBtUfItwl2zAiAM48/fhhj1vsQzhjJZqvpSc6h" +
                        "2mGo5hLPTDSPhuMgUEHAHUpXQFMabCg8v4dtv6/hxSGqFqDpVnELi7JyRcPnCsDGe717kv59zH3u" +
                        "j8R7TsRJAtIlkNGl4Pg+hqqpijYeUtiDMonqbL2/K/dPTMsYrO3+DdMAdXdIyKkhd2vjtzJCqZBW" +
                        "Os6wwp84qRBFBOgPitkEmHqD+uyXRNPcBqxYlBFURsfeK93JTlNmHsuPQVVLMJFucO4AEsc7DUsl" +
                        "a29iuFmwhCr6n+gQo4Tek9naVSnqPnrJD1VpVc3pf+JuZqzC1xXkJS9JUFWUhitdUZX3614lqXe1" +
                        "vYUPNMq892h0FQ/SsB0Fv5qcESokZoJfk5iFiuIR71bHGNbrV6vbKy7iTIFs70dopVYSI9X1Crsp" +
                        "1E91PI+vlLcEkxNNVNJZoS1Vj9ZvqkuaUivSWGCJIunt1r/6nfyeqZFa1ZZ8wBAGPKqEt3rNP1Ze" +
                        "faUq7D8eWAbiHtB9wEOxvhXPTAQcx6rrHdLYFN5LxyExEuKBK6X7DF9pEbYLLLlmSLaotfUoIXhb" +
                        "/xoMUbqUxXFMJqFCkAnW1barM4Ff9aAcxcACIbxWCmDke4iqrN035HOFNyeHrDdLBAHtUwDnpCym" +
                        "udAV4KL4j9hkQ5XYxsupwi6428DMwayAHVB24kUCZlBW8CeKEN/6+1/jODCq3MoaT0xFhauk3UbZ" +
                        "IkbslWLgW5AS2arPsQmcgqsM+KaOhDg0tmpdjBLG0991xDRIHBJnmtOIREnR28MpOcHxUxckEA2z" +
                        "6dRBgaEuyw4P6PSBlDvXufl8dgK7uuu2pxt96E6REtYNj8KZrVzlC4mgktQvGMK4sajOif9GvLff" +
                        "u0bO2c4lgPr/E/cUw8n0JVymiR2Pv6VbvuI+jgD6Tg/TIjGH8HAQIjsipYH37VxshrCJdSgGfxMi" +
                        "HOl9v5b6N2h5UDRLbFValx+BWCWpLCMHYKAXgA6bm1YXY2sksdWCLJsRYG+zFiDmNmb/I36DKJIZ" +
                        "MKCQ9GFZGMNwQFEZrh8l7ssqRTmtbKvolWrLiMG5sCvCG0fhuxtliC1Zp4QoQ/Jb4QxFLppTBVT1" +
                        "6CD10v6rOjl0KHYNcJyRlXWxazCEsk3XS8fnJ3ib/pAFnQiI2KRpiHj7ifRDtT7BdfJHQITZtrVe" +
                        "51pS6C1Z8Z1TVKuA4RFSBzOminegWhoZOGV9EJefE5FXJkUgqCptFxmOGtKuM4XiqJR2KvvCDEm1" +
                        "Nf0w8x/imS45wXHQslGKXoy9xhphtGQLjGiZuF9eqVRNL1VN0SFVoHBHUGx04mZiMCoswwbxNZkW" +
                        "1GbtJPUmcyH+kO4yUKLYaZzOoyRFhG1RJcskgbhwusespZFw3LA1kaRkbIlKNU1yccnlZCaurfqg" +
                        "No2DcRMVfdEqIujrK6OZZmIER+o73JEolBEsHQWaLdeak9yXgKCwmWwNMEStxWsQ7YUsnKRiQEJe" +
                        "7XqPbEHjHHIdG+rSNkadf7YKxi+OKzMqypp6oy7xnU5YXYMJ3qO23b97hjtfxg3jrMw9BVQI0B/o" +
                        "JcYQYo/XQlAIR3qWO43pdITCU8HtblHIJ2M/aPBM+wU9/9fpVefrsWVlfNesOcMz5xXnsh0usMVK" +
                        "oCbXDERs3jAhWEEixtf34nimLgvpS+mpOao1qWBE8Cri2YI+BTewgYrBRWNxwbY8K3I1KQZ6qMWa" +
                        "GEiMuMdf0Gk2LDLRdMIJuayTDQSmulyyQ1CGEUzZ2wFUTqjAOV2SkEJFx18AUp2APknf0xT3t5Hg" +
                        "4KSNU7zHqWedFKUuwDfNO6WVI/3/19ddldbFMOAEbALjqDwYkK2DoIfNtSQL7PiAxqUkQAUqkAfR" +
                        "YlYWDEGbBbqkmQyTmcATj17p8EVglwSLFoz5orJdm2sVMcwaDshpcVc0QA6pUOTnT2Se4ztolF3l" +
                        "M55iIlCsFWpsSDgGoPerwAML0elrboMQpMVQMswaQ5o+wqRqHEHqC2tVLnI0IhBlDETClspFL4TS" +
                        "jcl3YHhzt9W2Pe103dZiMjXBmTGMSpXSIDXEjygQ7Ypym93gEMY5Hk2S6TTNZdHvrC9QiRV/DpO8" +
                        "v3ocRzLOZFzOVI1EUix64KTvhqJNIXBgmVBhdBKwwxcZQJbMGh4ELHIBUiAjANWol6wshtC1y9gh" +
                        "AbTg7PioXF2y3iXemG6oNUGd27pZ49dyOJtobgkfaT5jsjlzRVpZwYAYSM9ocX23QJ8EsyhNkiR53" +
                        "/eeucFEXUwROQdgMdaIxnkXvk1ahvTGLfaoGl6NVWaB6DhBMYjtOXqqOZmz7blNCZi2mrL/Yt1uS" +
                        "XFNSHR9nVZT834hV3AZu5DvzHiFRH7NV69YwAXvZZ97OQ2mRKUxkwq/MFxulnEJIvVfpopuubCvR" +
                        "Fld21eYSAu0LAqAncFr6It9dIi13t0iLK0o3riCaI9oxoC6vUiR3JXvKxMesn8wIIA1MNxhHxkDq" +
                        "KiLatZLoWSYoDBazx+06v/FMUvs0dIJKYAtc/V7tjfpeQ3wE4kZmwaMyIBrup3Pa91ERuPpT4N0w" +
                        "Oefjq+pzEIAuV6q4BLpkgh7EqHvVXG9RFSkxvlwbskhM8bDXa0P1d3D1hzgu3/v4u8nzffnVC1SW" +
                        "MQuyT6cuxYvPfuNVJphkTntU7z5Z7chG+o5KFSGVd8OAftZNt8Q/k9vkPoHQMK7WbPuBQyx6IjKx" +
                        "6+5yr+pLQs1xAHx388I90jLv3r0PEkzrLMkt6RY6+IFJSYioMnpVZ8cJ4F0ibE2ViK2m+NG4QVgC" +
                        "PNfDNLwLo85I0vnWbyTS9xARyYqXxHw+LLZvJUZt4GKUfSv5Mplz1jWW2F7TeZCgWxbx+qOaYaYB" +
                        "lGEc1Nr90/vl0+9+Wt5hf9++fx/3XPW+3qDamVctH0j+B+NLGvvN3Jhr1JlSIpL9LgdQsKF1BU1j" +
                        "aiVfCfCaATTkdqLXpj52YlI1aypw7wwvTJjd3uPKpkH1DgmUEIlwuanbmn75HLCjRwHC3rRp1HUa" +
                        "kTA+69V1cLuhRMaWlBpvGSO2Sd0N8tTdItz2Ll5JuBDd/n+t6CJbrDvBhljPecVVBgcSRRe4Mihc" +
                        "Tr++LNq42E0glmh9pO/po8flo8fPyiXzBhtpu2QurkoCPgiGkfGhumPFgvcGn10SxrGPXFZTuNhH" +
                        "p/zXSWBMYkSXYWQd1JK7HAEcoFVR290KFebsaQQVNaTp3BVA6i9JYsrt2qEBHHWNzrUowebQsrpH" +
                        "X6ES9RPNSgAA4Gpe8oXcoY0I6BkKtca1yuEg3j4oImWEmtIr81r+tdLC/Q/rV+KkWa6HM+1DCVTl" +
                        "8E8iJxnaEp5328V7hxi65M7dXS7OvUsOT2b1mvvHulQ8Gk/LZ599Vt5evCsv376qA/LXWmFI3V4m" +
                        "JkF0CtC0lIo/CW7c0pYwXGCA0USMhInI4il1Z4gsHCNnuz/ZbaHMA6TgcrIMG0Dp0EhXr0LX0vqK" +
                        "/vz2Mn6+nHCFx6KrqjQ4dKRACABQg2iGdk+ffpZjAiQ1M+8AxQwYWHsQqYY/lOoEu7yDbdxv9Lrc" +
                        "zitFYonQD77XGwzLtVYKEgfxXYl0bqnPBwmbXB8DCo8LYtzlOoxDOipEZJ4Gn9YdSkTaPf/oO+WX" +
                        "L74or969znXHZHb1L3jC5Jcl6s90vx7rKsQpZco8jHO0e7J8n/SNDsme5YrMXRu6ZIusSDLwGTJY" +
                        "D8M3x8AtcHtN6a/dXEd94MXHnuBxbJAUjBmTOyN2WWNrukzASc+v2cEIUTboM5GxynoNsQ1uvARe" +
                        "G5Ty3iF2ETnOQSJa9MYkpCoSGeWeLioEEUiQKII2W+pg3BPdU8v6xj8iODaRz2qGAUbaIgyhAJ9d" +
                        "3znQlx4eaoJ7vuptW3dBpJNUMta3dRmkRwzi3oEDtqPXQU3Tv27xHhwpfbie5Xc++zz5wi+IbT56" +
                        "/rAsCKQPxnZsudLFPjk9KR/jLHzyycdlBr4k7IrXu3dvype//GX50z/5k3KOxnnEHE5PZ+XNG7QP" +
                        "jIGHB7dCKTl/D1frdaHgIZb7gF3IgrMNxoDDujPWaN6/exu30k3iusfZbCByGFCOcyOf0mThUgiv" +
                        "jncyPYiauELkixg7tk7Da3EW/EpRZSl5bhRcEaQNtubgIGzuSASokLa1NiAE00r9t8WLVHOYxiZ1" +
                        "+SKsbWnhFnaJvOe+ydIDDKbrrUre+J3PqrYOKryDOjOLrZv79OmTcon7/PH3PmPD4LT8+O//D1np" +
                        "td+L83fl/Pw8mzoWMK4AX5P+ujq/JN45Kv/wD/+oPHv2pPzFn/05e6X/fezT7ZonGqa4uqZPbkGw" +
                        "ruIBQ6GL/OjhQ7i8U169/IbOqtuM9id2ucSuEE/g84uYG2IX3e0J+SURr5rTpuyZYLjK2UNwr0Ga" +
                        "EFiNFdXD9+wPEL9wn2So1amp6kO8qRL3143cLsZZfwSDOOkgF2RHJdEWFqMjZCeKWqi5J0WaYhDb" +
                        "JfCrdENKgLelT10faoglAZBYCSj/qJKkgCuLtC57bLJ7zXoQy4Sn7vNXr95CSLYOk775d3/2l4mf" +
                        "rq8uyiWem2muEfGOj3XkMRQJPzhih+cD9EWnvL9alenpg/LJ53+rvPzqq/J8+jnxEZ6WW3Rs7K54" +
                        "DbfqZe42HpCfqBUkvbt8yy7443L/0cPyTiDoXCK4kSIIQ48G+SBNjrOABqahi4k0iiz60UOTQKqN" +
                        "6JIGaZhZmYlrvFCLqUM1ja1Z6hXc2evj6WwhDO6txVEicflsw9CFniQ99x0LJLeFfGxI7wwtHbZZ" +
                        "SdyoQt7viM1cVLkafUubNFVSJPaCkKEPHH22XKneJgSqJ7PT8uLLr8p7dvC8uWm9UnaCgt+nHz8v" +
                        "j548YntvzSQsMQ+/+PnPy8uXr7M030cAjthr/dt/+/fKD3/375XvPP2E/uFCvQL39QqYCcc+OvTm" +
                        "ko0ScMb1FSuVD+6V6Qr9yIReff2K+jpzIhvDRd6hh184J97REXGHiARSAuqkWHRDrZmfViLkzA5G" +
                        "NO40xDrAwU5WBlDCWjS2K5vx3Li43piagUs3uPdIktlg4ZaAFbFNrCSi7ZH3jK9HRT2LTKe7q/sV" +
                        "B519xNWy5Xat51hKBMhSlVlsX6GsBPfaDkauahvGAZ6Pn39U/uZXX5YVzNAbnzFnYFQi2XP96sVX" +
                        "5auf/TyZEfdKuzwvw4gLt4GJrwVL7sfYox/93u+Xv/rZl3hxdCQ3GwXr2pmWmE1PEcGLdOCu/rCx" +
                        "E8Rs4qmXH3z+gxjjWzdUYJQTDIIIswb64DoC6vl4Z1zXq+pCRfdZmbzTaOpay/N3ROG7KXIFy2UI" +
                        "edUqqWZVCxOpnhKGmr5MSoK1EEE6SIyMS2ORlsLnltzEdQytc2FdpQXZYs4yRGwtn31XJdncLLhE" +
                        "cT7iIIqMMXogVufHoNLNhK5fPX34gJzbsLy/PkfVsk8O0pucTAynY6GDRNupdplwZEAO8oDtnLMZ" +
                        "wzJhj52O2L/8438Gbk5qdtlJ5CktpGdE2qM+5IN8AM+DB/fxOi7Zzb8vf+fZ8/L3//tPy8WbV2zI" +
                        "uOE6iTz2oGUPFxiUy51sCNlMKOkYrrRpFgFmVlxpJwwS0AfmlESKWVbjFTri5Vt9Vzos7qjUbRXt" +
                        "vhC4SI4q0xLpwSoonWkL40k8VY4ado+d8AkG5+wr0sC4OhUJ/KyO92ZppU6WNNvgu6NkIx+JSuF1" +
                        "zUbloM189vhReY+hX61vgRMGpK8QXP7hs0yrIAzx9la312HYYwjyHjz68Jhqb8K/24srpG42/YnR" +
                        "98nxSVYb/ewjf24sNzXiRup+b1T+53/wP5XPP//t8h9++tPy4ldfCDYTg+sASK/JLa3iLrs2E2Xj" +
                        "m+OBWZREUzlyfDiZMXwsTmQoOhpojamE1etREsJpjC+3w9C5VzMJuO3YmARl6ZubFMcWyb4MDFsP" +
                        "LATmvs+PilURa7AZevOlEsirtHcskK2aq5G6V+o1iVbh00OrJFJqaqRvoEzeEMP/9v3bsqT/SCHI" +
                        "dquVOA1RYBjnsuJxl9HIxwxRmToQaCmfgHAnqtI5hPF6PA/ykylr+SNUlvrc9YsFC/xjGrodSUn7" +
                        "4Y//Qfn9//F/Lf/iX/9fRPk8B8M8jDt8OHWz5fkSJlXzbDzMxKTc72z+yaka2W/Qx9ZRWgQytoH2" +
                        "4W451NgGhFgpNLWuakbVBeAixOhZbzFJVZBfubnmtCBFEKmL29HlUnXAMN0G+0qL44caXDc4jH8i" +
                        "Ifls/yY13SLsPOKo0I/9Skq/+9IuiFCDaHNz2cdszzx3eSCZugR/VzhD1+BQxnAb155Qo6pCh4cZ" +
                        "DRfwyHbU7zMfHQiwl4ekFgTyLsUvFq/xyhAll4hXeGamYzRMJulef/0Nm/Melu99+rz83o//Xvl/" +
                        "/+zf432pIOAouOOQ5VIG8juw6QmJLAd3cuJE/SHy5XSJLtdqA3QQQpTKqFSsxXvxAqGRRb6kNZ94" +
                        "p26rWnKTP/nOdY3ojuxt+oTwSp19ZW0p/UDYcK/9EQ6ECFyTfSmOYVuLKlEiedW5CIUE09nJUw2H" +
                        "dbl3epZsAAPLQSGQDtMRDkM8r/cG3az6klXeYIPXBOWqqnZv2v2z02TiV5iDm+t39EtmxSedhZk+" +
                        "p9gfHAf0uhNTbYSDUDvuhMcAq89/90c/xuNal6+//io7E1c3C57P0sdqxB1OVp3RBe29ylT02EIk" +
                        "P9O/NgEblSVl6zFRPRFIVZEPIvTnw5/A4R1VWS5QZwcC79ZW2K1y4FEPB6vIhJggQYLmH0RRHdlW" +
                        "6VO3Zz2da47rPVWoREmwKtBUrHOvhHM53O/WVYW5QSV9MjdxtSHwVoKZGniqY8epYc4Dov0hN0xo" +
                        "ykxmLvB8kgCWiX08/ur1V2HS1do1HcwGq7pH7FI1YO+gKdZz0l1mR7MegeExBe5zh8Y0XtPreMrz" +
                        "9v/mT/8qRDEQNW4ZD4PCEOEA8MAHxEwEg+ij3BIqFhFUgRomA7JFOINKtBAlIsVdJtLmvToadgmm" +
                        "OYCQ8i+KAKJCKIIQlye2PZkCNVkZvBKHNsyefqvHpYSK79gJDa+EjwcVSKnLNREPAivCq2y2BIse" +
                        "8F5eZkHUEpURHFY40p4+fXcfmerwCG3z8P6DsvyprvFNjYUYe6XKX6n+2BeOKdhuCNJR9X3qn0yO" +
                        "Q0wZeoe35lJ9f3BqrswHlATcWz6CfZWnd68vLsv3vvs94hme1iVvdosbCHgQrC7LylsiziJQPnvo" +
                        "8u8Bj2OZpCe0itTgHJDKbndH+oSXkmJR5WnoRY6ORnW3Maj0EUMGvrlVXw5nO9jQB2Q7qImwrJcp" +
                        "LVH8XDPUwlXHkDDaNxlE9afP5b2DiTaK4zufVopkPvHhq9Uk1lFykr/DGdLYezbCBsnpIkXGWCY/" +
                        "ZzzDOSaVzPEP9KhUsbK65HlV7I0enOXs4RSzICzAyvfD1sQq8s7+A9sYNvSze5+NBxoz9ZvLoz69" +
                        "e/n+HeI1Ll+9+CV68D2DIcIEn2TTmJRKAw6m/sGNFnpWXKvGVwRUble9uHYTj4iW1eUF03C43GjK" +
                        "x2sirK6QqmcBuFmVDC3sC/0c+yVhUBFZSKM98SHtVWV0mSn7Rz1dv1RZTi+5QNfcA3IiftO6crtU" +
                        "qkNUZ0QvSoYyK55XSCacIsxMsFKHu2vWAwk9Rkv0IIjZ4jkLjOdspn/+0RP65OlqlkA6MOvJ2Qzm" +
                        "JBDX/oInnQa1A7TBPqNBXOFkApo8bdEcCeu7+GWOTIPp5E1xu+01aWmeRn7z+gXR/kueBMCdXrAY" +
                        "xrU90aqG1Yd/QgQGBE9ZmWNalWANUXQTLepeixzoBJkbKgwC88opGPRlECZjBMkGB8Fp/qSti2Tf" +
                        "FmMQVUkldL3+7X0lQINtkQCqJyVE70/nxVyeduxA6lvr5qpiKyUae5lFcispXpeGvlTDoLB6dbQ0" +
                        "jnLz/IYU1hwcmjX2CbUeUrVZ8wQ4TOA+ghEGXakxW728xEZx/4gkZs/8JGBv9mgl8pA3aDAScJHq" +
                        "pLKNXiMH6PYFfvY1XpqAX7E2s+FEikvikA0cMTCFoN4HPu8n2wrw4BdZqt/l+NgVWMINGSJbHS8R" +
                        "fcRP4vUlihOkXVQMiNBIZyVVKRQRTFp1l52c3PO9qp3KQKqexDNa+EZKQggQJlUjZToGDFLrSvSaofBa4Ek7+hPJMI1E6KJ+aptKFOOxaAltJHPpgvglSwE3GO/3SMgVat+HfPsQ4Ao87bcE6bjEUzIoLjdsWIhx99AeD23EksTR4Cx4Wd" +
                        "wsy5wss8CPkMTxEGZgzjfATBDM+gaDHaHO3r5+G0M77IzLRw+fFVawyxU5sAG+u/uSXXp1E/WW3JjLyHK8W2VdSraOywQ+BKrJlmBynOkYuVR/vtoZJoYxJQUIZTWcOAUQLPqY8ZgHOHXzjsjmZVaX9hNUxowM9gj7c5r0Eci3HWzskkJcTYmMpE2I7I1PVIGyucRNWoh+qFz9Etv5nZLttIwXKYORcKLSry5vB+lyGWMDQ+nmG5PEhgHX4uq2nGN7L" +
                        "64uWWJmgZD7Ru/PPj0rV796n0B9yK4akJKFxw6qT6lYLC7QTIA3PJRT1m3cPqWdXxMPrRZsEtnyXVUGROhAEYnbxnqCT/KOWME0q+vTV0RQQR4Q8RmDDQKckgg32Nw1Bt27KksupYKqxFSGRcasgaXcnBqINUgCudEOVmqKhtxa4lUVOIbYbpYYaBQZU2lKf0194dAVNaA8CBDfYDkHTP/Ow71n2lGLXpu7c4JwNMUablBCas5MmB2dLoBd52Qvc8GE" +
                        "2ifvzDccaoSNvSGtMsf72kK0Ifu1ZW4fOUkODunIjhfschYJwe+eYHzNSztj+v9oJqGZC86RRNniAIi4MQzY1zVWlYwNapi8kf+QXYeuuVyRYZZzqx2hEYBmrRoA5URFPGsfJDjluq0vENCnL+fmZMVg8mWwYWyEWOW/Rl6bkoAScMLhQTfIBQZt3AjDKTeZ+Jvx8pGOqrrk7Vqcyt1npYRvzk8aGBG5wFYfhZfQXGwqy4huglfFxBvkeoQMbhjxhJck" +
                        "dK/BETGNW6ZiZ+ydSmvsgVmPa08SIS+2Rv3r+o5wAtxs7jFjJoH12g5j17KmtAQo5jRN1O/GcihC2aJJPPUDRFKF9koOjMLe5eqmdtl16CQ9jen+/ft0Ni7vWCSbscMyxhMpkrVx5zNGruEiulyspCjerUusS5nHuWVrjXhTgk7aK1NKiXSz6B7GO+O7qgjWQtGZfumzT4y9Yti1MZ/dWxZi08amMcRWb5AdR4DrWxjogCQscat9+k3319hKmDHjgVVJ" +
                        "ldNd4k6fUEKmcyHNdSbVp2klvUfVYNxkYNFlnl8t86SdGyQ3qmjmvuMR+ZdztjK9ucJb2wSPUlrnQtT1YColLidd" +
                        "IUUma+e30TFUU927w8j6Siwmws16Hh5n+t61GR+FPua5e4tbljS4brjWuxAZxiR3z5cwsFtuJMrOhSz5TEli8hv1vn1CAabL5aqC7Ld6Nn6yOndpU70rJY7IHU43oj4CEUfYrhHqdK" +
                        "jMSwRftekdQbwubKE2b4ut8+FkKOyja/DCFzXFvagjVV7LFY5N1xLNEoeAd2GqxfmpNUTqkD3NJ+UMA//y1fvspXNb7gimfvadx+Xp4+8kjfVv//RfAb9xDY+dwGRYZTACbmCGBYlLizAJtKd" +
                        "fJTmLtCQZDM7dFdrfkm65vfa5fb4ojlQEyuw0jKdGZz7O7UQ0lhF7Ucd3uc+oV9fZaUzow7WUEzp2N81yDXfpzQGEKlFcaKTbouoABYznu7ZG9EJIONdkpW6860RKivWEQQlXRbUlBOEL0NlDLl+R9lAluxwt7J55lkhbDqapBrz25bzoDfjyWD2cHJsHswisGzf4VKUHvJyQ7H2INvnrL74sC56Om05PypMns/KAa88//" +
                        "pSl47NyRp7xr/7mP5RznAEf2tW2SRAZw253S+y2Xp6T55b0kdmN9dQoCoJM0PdowiWpFlPPAu+UpeY1HVvkpCQgmbOfFW05XtWg0W8f7fbkozMAnaGPDy5LY2eGsiL1bnZEyACI+eMr0oBqqERxBEaM3amAtyokC3YgYgpCkOyUbI4IUwhlLfbn8nNUMmMIm3GFxDYln+deGM9l8zaIVk07R9UJ9KvkhEAb3HzHqmmhet/v9uPOoPo0wLh8/7PvlcvLiyBzTI6rh8OxxNvqoLZGBM2ffPL98ssvX4Qh5QS1gcxgbLPty6QNY6i2HQ+iKAw+e+QYOjFsMuT5j1P0GvZixePTUlKKylFud9XA6/O4Mboe7WRH" +
                        "IhnRbjrVi9NxOGFN+wzP5IuvXuI8EO8AkBGuqX4fPwj7YQArUeRFESkiABXAxKaEN5nnWWMTVIQOwB5OFh7VgX2azrChcMhxnqCRvVt6PkzShT4JbLCcvdHA6vk4UkGJON9egS/qOjhFyYfH7sq4sS3ZiiszWg0u9owZN91/8t2Py" +
                        "y9/8fNyS3ZYdW08I3E6XY7P6t8vv/M7Pyz/9//zJ2QHiF0IVmXoeLjArsYBc3GazBuqGZIJcHagJE4Gj0L2zp4+" +
                        "/Mkx+48XZI1vOERhNMDvZqIa3pyM1O7IhHWuWFk7YplggzurNyFBRKgBqV7T9x49KG8Q8ytcSLlxgAspMUSA4ql60f3suMlBSaa9/KO6kWOME53EKS77Ce6ku/vrg6y0pwk0YOzqYqu24icQsauytI/MG04zPqkOzRz7MucY" +
                        "ldvbdbniTM1LXtdzPs/J/wGPRN4Ql5n19mEoNxW694FEFYiu+6BV7WOYzsdRNPwmM2eDY54QmME4hBbYZB9h9FCKJ/fuYV9xd2VkmOk127xQpmU4RUJRV1dooSGGftcj4qdfmddN6oMhc2cebDlhHuxWQtEg6VATI6nrKtKPOYTBAxe++OWXMa56JDlRj3ozHh33MB/4lJaoCUi8i4jyDqcuMIR6KW6vNVOdM1rIBo/2cIhMp9RQsuqHiIPHSGougiijcycvkSSmXMZHPtd2tYU0TRIFhJJIhCAr4HcLVc1eMx/cTVW79E4bCDDCTrUrqmOQampfyZAo2VQvbzgzYLT/wIJ6VmqUVj27BSpawgx678oxq5UTHlF5uH1IK9ohCeoWzzuDBmzeO436ci1mxAlSqnJPlxIot9fW4yXpE1" +
                        "OSYBz8Kzni+9WbdzAIH9S3qo+jKa4pz4ZcX77LkvJTNqKN4Ho9LoET2DwzyCQi/nC/htpHoEV6nq1hAPWxqs1FN0gEgOjhAfESF" +
                        "JCAA3NRIFXlpOgqTapKxAOiYRj5JzEEXqOeZQQRRF03SnSRiD3Bioj0iJE4BBKDz5VodgXjhCuBgLm5+cHlbP9Nsaf" +
                        "ucVDkPBuGEJMxZB3mRTrGRS9t0xhECZ8EFgf1mGC2AfPQ0ghOl2sMok+wra7RbHkNSddM2EP22aefl78h3Fi9+IKMPJvYkSCJ5Qrl9RVuNQznwpk4PaAOcqgRzIWIIG3Y4RWG34UmRVIgXHNxh/8JJ6neY21BHz3HFSLyOgHqRNMzyWEBlASrbI2aoUNdvZxChDQZrR+QrE4fpENAtwWt6GfIZxOF7EgKUtsgU7uQvoA66k+kUyf30XNxrZmIkT4aIf5+pA41K6NIGMuBfFTcfKR2iLutFBpH5J7cIaOFS+hDJoM5jSPsKzIGbLVfpagyiX1rHwa8etg/n4upp2cAC07DsM9JgsRb7o9wb7WS8wkbAV+xB0DplSs9o8cz" +
                        "d9B84Io4BhMgwXMqodqEeXn0Sh+JgjEEAYHX/aAk00tPcqTPxlgZvq4c3Uxcong1pyKRSqj6HgOPFExZKlhfY7xALvina+rxZvarK1cysS4qZKwUcW2ejKuRfqPfqSuxVSkbsJeRZC/+W4RX7zlbV/mgShptdatrHCYs2atGewm6cuGPlyqbVunDvc264j5j6RKHXqI4iJcGUsNsXNEhsJ3fZRTjOp4YIrZi3x37jU/vP8rJU7raVEqspUd4IObbw3" +
                        "UfPX5CgDzmaQCIQ19z7LgqUU/W851NhLrRfART5Bkdww3xAEP173FykrsuzQLnmQ6kxoYSuYf4P372FO8CMRahSIAqS8b2j0jQ8KpUNMoLxPV4yJ4oqK70ycVr7rvTvZ4rQ6" +
                        "8iDC4xqGq3Kam27NISoqAO5VDjoz3up2pFgsi9IUwAEASucR2hACk+PqJXRv/QXySabqITelVFNrEMxJxqtFGZPnc6Qs2YQNRGuHnCPvUiVav8Zx7MM7ipToIbIj2vbQymj0/pG23jUWBLNtdPUfsTgDkFpwbWDwje77Fc8otf/kKxjKoXh28u3sqp5Xh8Wk54vshD9CzaO//53tcTEhlG/4c9mWRU0QQxfPLRR0lkTtCfR2z/rLBi5DHIa0TQLHKIA+DZh4VoL0DGRhsD1X3OUG539dMjDXfmfyBlXUqmqUgG6WMcBebN2BhIH/ShvwE6VxWq3s1iZnQxxGNyeoEuIQizRPHsMLm6ixR4zbInntBx2O5c68DtvyOCj/FVx0RVpn1oJSLJT+dCxkLloZtt3JV5SyT+ZccOKRNtpIT2pNsRBFVtelj3gi1Fp8d4tTIHKhwxKA/ZVrzFVfcgKrMRhPQ89" +
                        "3maHUier6ntkxDOVfUGJiIgHPJTz4Z0QiJDVXPCZucf4Iv/xV/8Rfnqm29QaxKcp3MZQDtTNyKAdiYpUMyuGkfuGa8coRpqmh39zHcNfqJZrmtfchCc+kgPjD4OHdYlTJ1Q121R1rWN8GzJXVGTogRSHY6WqJJAdFWVyXjgoUX0eoPbr93guHgl1w1+eokaW4lpwlXJMIYTMeAMaSEIZqK63UprvD1iFBplLqqbEAR4hc+ilzYmO392Mivnbw/lxauvsSGDcv+Y8IHtrkM8t6ePH6P6yNTDnJ6Icctgt6zDlCNUsmMzqWzxgiiqUvW/79CPZy7JLblqOWW9Wj2wnL8u//Zf/BM4nZVrNvJpE2TGUBxuZV9t2YLUKe6zEfoGozZzhZNFtS/Z3f4Z55Ud3ztNIlHdLFdWMQUxxAgIJbp2m6Vrff+/+eJXeEZwCpM1UIzBB" +
                        "0BRj4XlBZL9BkI6MI6b1kUs/ym0ahCtNVPdGYtViUKFKSFhiHr6qy0OPGdj/KBtcZ3F7UPaVlXhEnV28fY1WkC3G" +
                        "Fg5SrHLmvweTO0Q356Pp/OszA0O0in27YrHLKZHH5Ere16+ePErVjGR9suX7OaHIdnqBB8gebtyy19B5VxEPkuM6sUm8BUopZKpxsGi3747MN8iCRJFNabevbm9oibSg6gPR/AnLQzI9Gb21F37mZe7V0S6VlKkilptldxmcOqDUHLJ2EMO4G4FdUjKxhVR4EpgpvGewlkenMAgIYCzSb+qKAkAkXKCH9zvBHStZRR9MWGsz25STyzQQ57FoW36ULaAyX1nBwnM9WSNuezDUEk3Ma5L4Hqkl6xGqlYMNpU" +
                        "ui/OSGayLY132bFjR01NFoduRHBwBflHjCQH2f/zZX3PK4VFyhC5AroCdpmWK+hMHSryHjd8ynip+lHiQewylLhABorevl+As3bNs0tJYZHbyEP0JtVlhcyISQG6y3nxegzrwE/f3LviL0gZJxBgXcJPHap3xDP2MbGyvayLzEoOMqsDXZ37QGD2sHCMenpF5wQZ1iduW1l74HTjrizHa1UonYZ36alu17/ak2oI4fDTtqVEdaD" +
                        "y4pj1KghMpiS0hk+FzpdecZuje4xlG3BM4Zj7uCELbJQPnbwqmi8TwAW2Cu7sblPdvX5JC6pHMZCnZdRqsg5Kq/EI6+I1" +
                        "5866N9Uy2W1UkJQ+tA59ZZYtEU4plkr5+tCfwRYFzMyKMo+1Pktih6ypG1mkshujcZxBNtElI5hk1lUUwJKff5WRZ1NEtntiUfk1XVFWCOnTnAlzvcVnGPD6ibspEHSwX73Jc1ofkgSD03xalTEwrGcnOOnhe3xKvreuKo7DKfQq/i2+uGRvQLdY8wOs/bRgE07bo/t7A+UvSScMuC1tHBtTCalbDfqiPA6MK7uABGqDurzhbAOIt0ABLiLRxowr/3OUyXHL0PgyXs95gwhVjmPAPMbZk81k8M7jXBqvWJIrEvtT+ULFvxOpqWn7AB/Hto8ouz68Qa54F1H0D+JXPadKuPhCr++j0iTMggOkXcZMkJfZAHa9K1HDPkT6PlPflBE7usZed2MH" +
                        "9z3KfructrubJ/bNsMPSXLEBfxbUIpU4KA9QjqVRxMIUSD+LzrAuESlUqRnr5Ei8RIKPKQKhME5dXhhLRMGgCWImCBzcXDqRceLRvWYqGYU2VKC1Km4QxwFT9Xc5J+aMJXNLwjGlzXjfv+REjCGei16SqL8/WzK5/4E2pYhOi+N0f8TGUTTgrTnnptDx58oCdmCyBTsn5iGSBvQbAm/ObphH0YCJJl9CBwPXx0+ccVmrRVx8hAfhWuNAGlSDFgbArcrVTCsfCedouF+VMuSe1w67D96ybJDXDuEpMW+gmRBGZQQz3RZiIxpu9K6qxxC0QSaLIFJY8Z9PQlA6qDaKvuuMTguoS05fwVXvowhpMhGZ1Xcpr10iPdrVKjV6gEobEgCeXpQ8g/Qb1dwm+7qHC1DjuIfCg1Kh+HKTKBDUmDGCYEokgE5PAQXqqbZHTpdl9HgV88uQJsc8RXpn+M4Z6RMQuoq/YealIaapswH8G8GM9kNT4JfuuqGvs4eDiwHyZy6YmCl3hdP/uCD1d10BM64B4kHGLWhywV/fkhF95whvsQTCfr/Hx9cG1EbC6FkLq/eHiJv0iQSBCCKERdkQlAzoIm9fzRZgpoB1JtxbyJ0GcA99ct5F0wqSK9PuaOci5zsGdP540Pj+/RhWTlXaPF3W1p+rD+ty/u/fJL94wBn2bIb+BUI6xMpKnT9W38DjGEiKLQwAAlkoIn5+pqoy+hQ1Gfkhs853v4N3xU2IdToGn5iH69eGMRFujRx5z4quTze+VQUq9ogyAxHjcVZ/Fni0n4LXIcr1CbvTQnCO26xyx6dt1mCptVZfXdR7sCN7RjgmYwZ5t0LOotgFJP/MsRzzekLwWs1DnugKYo0Si65kr3y2OGzX1a59zkz96TzKSaiQ4TT3acV215KN5ItUAcg2DAaHUYiw8McY4It/lXoEFaZP0ZSfMUfxGLcBIEvIh3P2EzIiSennNkcXXNe5x5xG5jwTTwirYkQ7aQAq8MuZNSkhNJJz3OXb/t3/rt0hy8htxrImNYJb+O4zdlIbv37xG/0/KPTf09flBHETTfJaAyaNlo8vsej9eytYjFAECY549t1SW88Eqhog9YNoquEqkerpsno+BcEoUSrmsWY9AhgDuBFuEAe2yz2DSLd991pw/iaGuGy0Yl3buvtF4a1NULSI3mAmeGqyBgNgRJhp4uefmhgS3og7sKC9ZamZ0qiMBSqHtiU+YQxiNHBdTzalKU3eySGAQqAR2cGwMMjvYgdkR2ZH7j4n07xO7EO/dnKPmyJOZYUYdnvDcqrt13iJ9+AvxPP09BPvqg2MTwS4yzY5Oy49/9++yCXDAEv9lmZj0Rcr6D6DSDbr+HV7JPYBw61IXG9LFlfVIEg+K9kBoUyGm8c0QJ5cUY4imXBGnQJSxwE7Y1cKg5qHMgykx7TloTtr4QKni9Dr9itJbq1JADrrZMwbsV+nLM5AgLCl+0OaClmlgrZaSqTdVjXIcLmskjRJ7wzipTj09JK+p0yNtwCPXu6poH" +
                        "k5b4uJdVJLE8x+Ep2lgVzvozjgeDRCqmg5Kakg3mrF0bV0OWOMQ+KiJazwuYwN9vL01zoJmwaUJ8cEk/OL/rH39nR/+" +
                        "EDz76KEeH4/lo3E8AK+/BQHHbCDwmeQ6TQIwOFsvRQPn4D4RIFE8QVwPCy2QYrra3ZfwFaKKLmcH4YARXf1sVU1UEzM1PporpvfqGv4eIJQCk4TCqvMh75pCMWZyYv5Xv2ePAZ9Vh/GCcxckG60Dn+1t2xYj+TyIC0eKECXJzeIdf+2IytdwbjIRIFycSwjdX2MPc29JNnBDz9IUvlgUqR4O" +
                        "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" +
                        "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";
                }
            }];
        });
})();


