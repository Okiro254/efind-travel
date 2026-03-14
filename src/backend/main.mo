import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  // Types
  type Destination = {
    name : Text;
    region : Text;
    routeCount : Nat;
  };

  type Tour = {
    title : Text;
    image : Text;
    priceCNY : Nat;
    duration : { days : Nat; nights : Nat };
    departureInfo : Text;
    location : Text;
    category : TourCategory;
    badge : ?Text;
  };

  type Guide = {
    title : Text;
    excerpt : Text;
    category : GuideCategory;
  };

  type TourCategory = {
    #featured;
    #latinAmerica;
    #antarctica;
    #adventure;
    #luxury;
  };

  type GuideCategory = {
    #family;
    #relaxation;
    #sightseeing;
    #cultural;
    #luxury;
    #wildlife;
    #adventure;
    #photography;
  };

  // Comparison modules
  module Destination {
    public func compare(d1 : Destination, d2 : Destination) : Order.Order {
      if (d1.routeCount < d2.routeCount) { #less } else if (d1.routeCount > d2.routeCount) { #greater } else {
        #equal;
      };
    };
  };

  module Tour {
    public func compareByPrice(t1 : Tour, t2 : Tour) : Order.Order {
      if (t1.priceCNY < t2.priceCNY) { #less } else if (t1.priceCNY > t2.priceCNY) { #greater } else {
        #equal;
      };
    };
  };

  module Guide {
    public func compare(g1 : Guide, g2 : Guide) : Order.Order {
      g1.title.compare(g2.title);
    };
  };

  // Seed Data
  let destinations = [
    {
      name = "马丘比丘";
      region = "拉丁美洲";
      routeCount = 12;
    },
    {
      name = "复活节岛";
      region = "拉丁美洲";
      routeCount = 5;
    },
    {
      name = "南极半岛";
      region = "极地";
      routeCount = 7;
    },
    {
      name = "东京";
      region = "亚洲";
      routeCount = 15;
    },
    {
      name = "迪拜";
      region = "中东";
      routeCount = 10;
    },
  ];

  let tours = [
    {
      title = "阿根廷-智利南极探险12日";
      image = "tour1.jpg";
      priceCNY = 35000;
      duration = { days = 12; nights = 11 };
      departureInfo = "12月-3月，每月出发";
      location = "南极洲";
      category = #adventure;
      badge = ? "限时优惠";
    },
    {
      title = "秘鲁-玻利维亚经典环线";
      image = "tour2.jpg";
      priceCNY = 23900;
      duration = { days = 14; nights = 13 };
      departureInfo = "全年每月发团";
      location = "拉丁美洲";
      category = #featured;
      badge = null;
    },
    {
      title = "南极半岛邮轮16日";
      image = "tour3.jpg";
      priceCNY = 45000;
      duration = { days = 16; nights = 15 };
      departureInfo = "12-2月";
      location = "南极洲";
      category = #luxury;
      badge = ? "限量席位";
    },
  ];

  let guides = [
    {
      title = "南美行前准备全攻略";
      excerpt = "装备、签证、货币、语言全方位指南";
      category = #adventure;
    },
    {
      title = "秘鲁美食TOP10";
      excerpt = "不可错过的地道秘鲁美食推荐";
      category = #cultural;
    },
    {
      title = "南极旅行必带物品清单";
      excerpt = "防寒、防晒必备装备一次打包";
      category = #adventure;
    },
  ];

  // Public Query Methods
  public query ({ caller }) func getDestinations() : async [Destination] {
    destinations;
  };

  public query ({ caller }) func getDestinationsByRegion(region : Text) : async [Destination] {
    destinations.filter(func(d) { d.region == region });
  };

  public query ({ caller }) func getTours() : async [Tour] {
    tours;
  };

  public query ({ caller }) func getToursByCategory(category : TourCategory) : async [Tour] {
    tours.filter(func(t) { t.category == category });
  };

  public query ({ caller }) func getToursByPriceRange(minPrice : Nat, maxPrice : Nat) : async [Tour] {
    tours.filter(
      func(t) { t.priceCNY >= minPrice and t.priceCNY <= maxPrice }
    );
  };

  public query ({ caller }) func getGuides() : async [Guide] {
    guides;
  };

  public query ({ caller }) func getGuidesByCategory(category : GuideCategory) : async [Guide] {
    guides.filter(func(g) { g.category == category });
  };

  public query ({ caller }) func getAllToursSortedByPrice() : async [Tour] {
    tours.sort(Tour.compareByPrice);
  };

  public query ({ caller }) func getDestinationsSortedByRouteCount() : async [Destination] {
    let iter = destinations.values();
    iter.toArray().sort();
  };

  public query ({ caller }) func getAllToursByCategory(category : TourCategory) : async [Tour] {
    tours.filter(func(t) { t.category == category });
  };
};
