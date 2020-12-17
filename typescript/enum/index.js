var Tariff;
(function (Tariff) {
    Tariff[Tariff["Basic"] = 0] = "Basic";
    Tariff[Tariff["Classic"] = 1] = "Classic";
    Tariff[Tariff["Premium"] = 2] = "Premium";
})(Tariff || (Tariff = {}));
;
var classicTariff = Tariff.Classic;
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
    SocialMedia["TWITTER"] = "TWITTER";
})(SocialMedia || (SocialMedia = {}));
;
var twitter = SocialMedia.TWITTER;
console.log(twitter);
