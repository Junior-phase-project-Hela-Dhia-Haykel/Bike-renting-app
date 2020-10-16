const db  = require('./index.js');
const Bike = require('./bike.js');

const simpleData = [
    {
        model: "Kids Bike", 
        price: 10.00,
        imageUrl: "https://i1.adis.ws/i/washford/193694?w=740&h=555&qlt=75&fmt=webp&v=1",
        quantity: 15 ,
        description: " Wheel is the perfect bike for kids that still need to build their confidence on two wheels!Its grown-up cream colour and butterfly graphics will make learning to ride a bike loads of fun. Safety is also in mind, with removable stabilisers, and a full chainguard that will protect fingers and clothes from getting caught in the chain. The front and rear caliper brakes will also ensure that your little one will always have plenty of control when riding.",
        
    },
      {
        model: "Adult Bike",
        price:25.00,
        imageUrl: "https://i5.walmartimages.com/asr/3ed1be16-2c88-408a-ad27-a4a3a19bfc25_1.7b1544aab1d8c637638560fa44b6c71b.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        description: "Ride with confidence and style on the Meridian tricycle by Schwinn. This full-sized tricycle for adults is perfect for those who want to enjoy the outdoors. The Meridian?s stylish three-wheeled design provides more stability than a bicycle, while the step-through aluminum frame provides a low stand over height, making it easier to get on and off. Its single-speed drivetrain, front linear pull brake, and rear drum brake make it simple to use. Plus, this tricycle?s upright riding position and cruiser dual spring saddle make it a joy to ride. And don?t forget - the rear folding basket has plenty of room for cargo, like a backpack, bags of groceries, and more. (Note: the basket is not suitable for children, pets, or other passengers.) Experience the joy of cycling like never before with the Meridian tricycle. Enjoy the freedom of riding a Schwinn.",
        quantity: 26,
        daysOfService: "0",
    },  
    {
        model: "Track Bike",
        price:40.00,
        imageUrl: "https://www.bikeinn.com/f/13762/137623423/se-bikes-ripper-x-20-2020.jpg",
        description: "Built with a super-stiff 6066 aluminum frame featuring a bi-oval downtube and 6066 aluminum Landing Gear forks, this rad ride weighs in at a featherweight 16.5 pounds. Rounding out the package are Alienation Ankle Biter rims, a Promax Impact Mini stem and new Vee Tire Co Speed Booster tires. It’s no wonder that the Ripper X is one of the fastest rippers on the track.",
        quantity: 3 ,
        daysOfService: "0",
    },  
    
      {
        model: "City Bike",
        price:30.00,
        imageUrl: "https://www.bikeinn.com/f/13762/137624787/fuji-traverse-1.5-2020.jpg",
        description: "The Traverse is a dual-sport machine that will take you anywhere. With disc brakes, the Traverse is a confident commuter on city streets but still able to conquer trails with ease.",
        quantity: 36 ,
        daysOfService: "0",
    },
    
    {
        model: "Cyclocross Bike",
        price:65.00,
        imageUrl: "https://www.bikeinn.com/f/13759/137593968_3/factor-o2-disc.jpg",
        description: "The O2 has been shaped and constructed for the best performance on the road, not just on the test lab. After long hours spent on FEA for structural analysis and perfecting the carbon fibre layup in our factory, many frames and fork samples in all sizes were made to be tested on the road by our team of test riders, as well as some of the top professional cyclists. This extended road testing provided very valuable feedback to refine and perfect the riding characteristics of the Factor O2.",
        quantity: 19,
        daysOfService: "0",
    },
   
    {
        model: "Mountain Bike",
        price:50.00,
        imageUrl: "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/22/96/351096_3421_L2.jpg",
        description: "The Ibis Ripmo was updated for 2020, and the V2 is indeed an improvement over the original. The primary changes, including a degree slacker head tube angle, a longer wheelbase, and a more progressive suspension curve may seem subtle, but the result is an even more well-rounded ride with enhanced composure on descents and improved stability at speed. The Ripmo has no downhill speed or terrain limits, yet it still magically climbs like a bike with less travel and tackles technical terrain with the best of them. The geometry feels perfectly dialed and it excels both up and down the mountain. The DW-Link suspension handles the 147mm of rear-wheel travel well with excellent mid-stroke support and improved big hit performance. Our testers were absolutely blown away by the new Ripmo, and we feel this is the best trail bike we've tested.",
        quantity:28,
        daysOfService: "0",
    },
    {
        model: "Trick Bike",
        price:55.00,
        imageUrl: "https://www.bikeinn.com/f/13762/137623446/se-bikes-gadium-20-2020.jpg",
        description: "If you’ve ever seen Kris Fox ride, you know that he needs a bike that can keep up with his incredible speed and insane heights. And his signature Gaudium does just that. This stylish bike features a double-butted main frame, female axle hubs, Alienation rims, extra-wide 2.4” tires, and Odyssey pedals. It’s built to blast and take any abuse you can throw at it.",
        quantity:12 ,
        daysOfService: "0",
    },
     {
        model: "Hybrid Bike",
        price:45.00,
        imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2020/05/CONTINUUM_NEW_LIGHT_CORRECTED-3-920x613.jpg",
        description: "The Priority Bicycles Continuum Onyx includes front and rear lights, fenders, and uses a Gates Carbon belt drive system with a continuously variable rear hub. It’s unlike most anything on the market and offers the advantage of reduced maintenance and no chance of grease on your clothes. Gearing covers a similar range as a 1×8 drivetrain but without distinct gears. It’s smooth and easy to start from a stop.",
        quantity:7,
        daysOfService: "0",
    },
    {
        model: "Road Bike",
        price:65.00,
        imageUrl: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1588105694-giant-tcr-advanced-sl-0-disc-1588105677.jpg?crop=1xw:1xh;center,top",
        description: "Giant’s premier race bike gets a full redesign for model year 2021. The frame is 140 grams lighter which helps the top of the line model shown here alight our scale at just 14.5 pounds (size large)—impressive for a bike with power meter, disc brakes, and 42mm-deep tubeless-ready wheels. And even though it weighs less, Giant added some aerodynamic tuning to reduce drag for greater efficiency. The new TCR embraces the trend toward wider tires with clearance for up to 32mm-wide rubber. The build reflects the price: SRAM Red eTap AXS with power meter, carbon bar and stem, and a Cadex (a Giant brand) wheelset with carbon rims and carbon spokes. On the road, this bike is very quick and handles extremely well.",
        quantity: 11 ,
        daysOfService: "0",
    },
    {
        model: "Triathlon/Time Trial Bike",
        price:85.00,
        imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2017/03/full_speedmax-cf-slx-9-ltd_c1329-920x518.png",
        description: "The entry level model enjoys a carbon frame, built around a Shimano 105 frame with Mavic Cosmic Elite hoops. The cockpit features the Canyon H30 Basebar Flat CF.As you move through the range, the cockpit becomes even more sophisticated, with greater integration and more storage space, ideal for long distance events.",
        quantity: 6 ,
        daysOfService: "0",
    },
   
    
    {
        model: "Commuting Bike",
        price:58.00,
        imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2020/06/Carrera-Subway-1-dark.jpg  ",
        description: "At a slightly more budget friendly price point, the Carrera Subway 1 also offers 24 gears and disc brakes. However, hydraulics are sacrificed here in favor of cheaper mechanical disc brakes. These don’t have quite the same power and modulation as a hydraulic system, but still perform better in the wet than traditional rim brakes.",
        quantity: 11 ,
        daysOfService: "0",
    },
    {
        model: "Women Bike",
        price:39.00,
        imageUrl: "https://i1.adis.ws/i/washford/566320?w=740&h=555&qlt=75&fmt=webp&v=1",
        description: "Apollo has gained a reputation for manufacturing quality bikes that offer exceptional value for money, and the Apollo Twilight certainly ticks both of these boxes. Mixing solid build quality with premium components, you’ll get plenty of bang for your buck with an Apollo Twilight Womens Mountain Bike.",
        quantity: 21 ,
        daysOfService: "0",
    },
]

const insertSampledata = function() {
    Bike.Bike.create(simpleData)
      .then(() => db.disconnect());
  };
  
  insertSampledata();