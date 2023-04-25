const solution = {
  dropped: { services: [], shipments: [] },
  routes: [
    {
      vehicle: "6c48bf2f-a891-405d-a10b-e83e377f3864",
      stops: [
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T08:52:52Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T08:52:52Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "d68450e6-b061-4a33-863f-b7ce4e86266a",
            "622de545-99b3-4d68-8ad3-e0efb57f62b8",
            "45f92a6a-76c4-473b-8d45-e3b72c76ad3c",
            "3aa7d8c0-9e30-4fa2-92ba-425e52079379",
            "e7ac2341-cdae-486f-8f3d-4eb32c428e25",
            "86e2dc7e-8d97-436a-801b-6be89e5aef8e",
            "99d54a63-cba0-4dec-9b75-8740a5ada123",
            "24f2f2a5-48b2-4a77-b596-6e6480a6a909",
            "b5a49ca1-76bc-4e1a-8e82-919d1f3616dd",
            "836b2d63-d17c-4c39-adda-8d15e2e3848c",
            "2e07f9c2-9e40-468c-82f8-a8ae60dad3b3",
            "de336fce-e61c-4c64-8d16-c5203b7d1ff4",
            "bb6e81ab-cdfc-4abe-9333-b16fac643845",
            "94e15766-b6e8-4b5c-87db-0b28cd36e289",
            "3d10d7bc-17a1-43e7-bc90-9dac584a2f77",
            "598efe6d-1deb-4b99-ac9e-33faeaa7318f",
            "47598745-aed0-41c6-958d-1dd65bec1f11",
            "b2a7f9eb-5a78-4fe9-a09e-0f6d75bb82d6",
            "9519029a-a386-40fa-9c7b-63e7c7814f3f",
            "4de0a52d-59ba-4ff4-8dff-a0c0f6a67c45",
            "60de73f6-e849-4b3e-9071-d7feb70719ed",
            "296411e4-fc28-4abd-8e06-48546ca7aefc",
            "7891a201-d176-4ecd-aec2-25cf833e600a",
            "9aee55b1-8a22-41d8-9bd8-adf667db5dc5",
            "3582ec30-b466-4a8c-a195-b09eb031eb40",
            "b4b881f3-2566-44f1-aa53-624c69ef7023",
            "3897e1d8-2caa-4fe7-903b-8704c142e420",
            "cc56ef11-990b-43a4-ad02-3a792ff2ecba",
            "de1d7e78-92c9-4789-93be-446cc5866c5c",
            "10f64d3f-14bf-4a09-9b75-052c3ca7d168",
            "752c1eed-bd4c-4a0f-8670-301b48eacf72",
            "b20af625-b7c6-457d-b1cf-d9de2fc06ccf",
            "2d168c97-107e-4b91-badd-601dbb63f07e",
            "5dfe043b-d3d8-4401-8a50-964115f7f282",
            "60dc884b-e80a-45d1-a158-ca0b96fcabcf",
            "15403ee8-630f-4e6f-aa1b-fb2a0117a17b",
            "ff78d3b0-a142-4364-aefd-cdbe7c92cefd",
            "d23080f7-8832-47a5-8aa5-f0c01b26d879",
            "2649c069-ed29-40b0-8689-713d74100a60",
            "ebb70ac5-1495-4fcf-896c-7b3fba5c9669",
            "ed3f3e92-ff2d-4aec-8a97-e2f923c7cc77",
            "e5a6ce73-f9a7-4f25-ab1d-e836f46fd3f8",
            "4278977f-7a32-4d60-9dd2-b8f93e979849",
            "30b8106f-e269-405e-bbe5-587be3cc8063",
            "56bb31de-522a-4d8c-9592-8812c2c322e6"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "70788 Rippin Port",
          location_metadata: {
            supplied_coordinate: [139.73785782265978, 35.68443067743698],
            snapped_coordinate: [139.737873, 35.684361]
          },
          eta: "2022-04-20T09:00:00Z",
          type: "pickup",
          duration: 0,
          pickups: ["b4ad889b-45c2-4b71-ae8e-8224ebe5ecf8"],
          odometer: 2216,
          wait: 0
        },
        {
          location: "061 Wolf Rue Suite 567",
          location_metadata: {
            supplied_coordinate: [139.73556053670802, 35.679978011099166],
            snapped_coordinate: [139.73588, 35.680077]
          },
          eta: "2022-04-20T09:02:47Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["56bb31de-522a-4d8c-9592-8812c2c322e6"],
          odometer: 2922,
          wait: 0
        },
        {
          location: "7582 Shawn Flats",
          location_metadata: {
            supplied_coordinate: [139.73098969099533, 35.67348793487302],
            snapped_coordinate: [139.730901, 35.673486]
          },
          eta: "2022-04-20T09:06:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["30b8106f-e269-405e-bbe5-587be3cc8063"],
          odometer: 3930,
          wait: 0
        },
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T09:14:06Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "47c056e5-c002-44b1-af08-d1142a531707",
            "31d9d76e-dff9-4957-a81f-6c69dd776ee1"
          ],
          odometer: 6610,
          wait: 0
        },
        {
          location: "4753 Lebsack Passage",
          location_metadata: {
            supplied_coordinate: [139.7274268872742, 35.67719353648356],
            snapped_coordinate: [139.727526, 35.67707]
          },
          eta: "2022-04-20T09:23:54Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["e5a6ce73-f9a7-4f25-ab1d-e836f46fd3f8"],
          odometer: 9116,
          wait: 0
        },
        {
          location: "38783 Juana Fork",
          location_metadata: {
            supplied_coordinate: [139.7268660593372, 35.67877293553753],
            snapped_coordinate: [139.726864, 35.678778]
          },
          eta: "2022-04-20T09:26:09Z",
          type: "pickup",
          duration: 0,
          pickups: ["7541295f-cfcc-44a9-a1f5-bc221d5d5e0a"],
          odometer: 9411,
          wait: 0
        },
        {
          location: "36212 Doug Dale",
          location_metadata: {
            supplied_coordinate: [139.72153622860515, 35.670758952956405],
            snapped_coordinate: [139.721613, 35.670784]
          },
          eta: "2022-04-20T09:31:58Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["4278977f-7a32-4d60-9dd2-b8f93e979849"],
          odometer: 11196,
          wait: 0
        },
        {
          location: "88339 Ankunding Fields",
          location_metadata: {
            supplied_coordinate: [139.70817368292936, 35.66060563483416],
            snapped_coordinate: [139.708025, 35.660517]
          },
          eta: "2022-04-20T09:38:12Z",
          type: "pickup",
          duration: 0,
          pickups: ["af685a38-50a9-41d5-b844-5f5dfdf9c772"],
          odometer: 13374,
          wait: 0
        },
        {
          location: "657 Ronnie Junctions Suite 275",
          location_metadata: {
            supplied_coordinate: [139.71319234442436, 35.655427468591135],
            snapped_coordinate: [139.713191, 35.655384]
          },
          eta: "2022-04-20T09:42:34Z",
          type: "pickup",
          duration: 0,
          pickups: ["e8f9b31c-7119-4449-864c-0ef4e24a6a34"],
          odometer: 14523,
          wait: 0
        },
        {
          location: "07470 Jast Drive Suite 877",
          location_metadata: {
            supplied_coordinate: [139.72247691838535, 35.6488113546185],
            snapped_coordinate: [139.722448, 35.648952]
          },
          eta: "2022-04-20T09:49:08Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["bb6e81ab-cdfc-4abe-9333-b16fac643845"],
          odometer: 16313,
          wait: 0
        },
        {
          location: "14496 Roger Skyway",
          location_metadata: {
            supplied_coordinate: [139.72549790747414, 35.648712494694784],
            snapped_coordinate: [139.725422, 35.649011]
          },
          eta: "2022-04-20T09:52:56Z",
          type: "pickup",
          duration: 0,
          pickups: ["9c025cf0-35b7-401e-a86a-969c71a480cc"],
          odometer: 17118,
          wait: 0
        },
        {
          location: "48195 Nienow Forges",
          location_metadata: {
            supplied_coordinate: [139.72710703117698, 35.64974303530243],
            snapped_coordinate: [139.727112, 35.649729]
          },
          eta: "2022-04-20T09:53:55Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["de336fce-e61c-4c64-8d16-c5203b7d1ff4"],
          odometer: 17320,
          wait: 0
        },
        {
          location: "2139 Vernon Islands Suite 551",
          location_metadata: {
            supplied_coordinate: [139.72830080660827, 35.645020440214175],
            snapped_coordinate: [139.728294, 35.645005]
          },
          eta: "2022-04-20T09:57:30Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2e07f9c2-9e40-468c-82f8-a8ae60dad3b3"],
          odometer: 18233,
          wait: 0
        },
        {
          location: "769 Taylor Crescent Apt. 629",
          location_metadata: {
            supplied_coordinate: [139.7292375151423, 35.639872931085996],
            snapped_coordinate: [139.729392, 35.639693]
          },
          eta: "2022-04-20T10:03:01Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["31d9d76e-dff9-4957-a81f-6c69dd776ee1"],
          odometer: 19570,
          wait: 0
        },
        {
          location: "21661 Kenneth Trace",
          location_metadata: {
            supplied_coordinate: [139.74593847158494, 35.64809080944359],
            snapped_coordinate: [139.745969, 35.648467]
          },
          eta: "2022-04-20T10:10:47Z",
          type: "pickup",
          duration: 0,
          pickups: ["00f9136f-bd36-4234-bd50-426dbabf1af4"],
          odometer: 22083,
          wait: 0
        },
        {
          location: "33391 Keebler Garden Suite 612",
          location_metadata: {
            supplied_coordinate: [139.75047320237405, 35.660319057802276],
            snapped_coordinate: [139.750989, 35.660157]
          },
          eta: "2022-04-20T10:18:00Z",
          type: "pickup",
          duration: 0,
          pickups: ["ba5e0922-f3a1-4240-ab59-584297cf6bad"],
          odometer: 23832,
          wait: 0
        },
        {
          location: "820 Woodrow Way",
          location_metadata: {
            supplied_coordinate: [139.7472870494541, 35.66460707446307],
            snapped_coordinate: [139.747299, 35.664627]
          },
          eta: "2022-04-20T10:20:41Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b5a49ca1-76bc-4e1a-8e82-919d1f3616dd"],
          odometer: 24658,
          wait: 0
        },
        {
          location: "6338 Emard Shore Apt. 159",
          location_metadata: {
            supplied_coordinate: [139.74795914077066, 35.66633307926772],
            snapped_coordinate: [139.748177, 35.666258]
          },
          eta: "2022-04-20T10:23:02Z",
          type: "pickup",
          duration: 0,
          pickups: ["3a210864-d5b6-4c4e-8635-cfc1fc84cb1d"],
          odometer: 25144,
          wait: 0
        },
        {
          location: "30541 Claudia Grove Apt. 138",
          location_metadata: {
            supplied_coordinate: [139.7118870318601, 35.63996921955799],
            snapped_coordinate: [139.711872, 35.639947]
          },
          eta: "2022-04-20T10:39:30Z",
          type: "pickup",
          duration: 0,
          pickups: ["8bdb3765-342c-4a30-bf6b-70c33a43546f"],
          odometer: 31669,
          wait: 0
        },
        {
          location: "53205 Zboncak Harbors Apt. 806",
          location_metadata: {
            supplied_coordinate: [139.7103902364208, 35.64407538776832],
            snapped_coordinate: [139.710399, 35.644147]
          },
          eta: "2022-04-20T10:40:49Z",
          type: "pickup",
          duration: 0,
          pickups: ["f67274b5-6079-4b38-936c-8ab21d7dfb46"],
          odometer: 32454,
          wait: 0
        },
        {
          location: "5427 Ward Road",
          location_metadata: {
            supplied_coordinate: [139.70702114066054, 35.63937047542034],
            snapped_coordinate: [139.707182, 35.639333]
          },
          eta: "2022-04-20T10:44:02Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["99d54a63-cba0-4dec-9b75-8740a5ada123"],
          odometer: 33323,
          wait: 0
        },
        {
          location: "44777 Bashirian Heights",
          location_metadata: {
            supplied_coordinate: [139.70548826046746, 35.64255023132214],
            snapped_coordinate: [139.705734, 35.642378]
          },
          eta: "2022-04-20T10:46:22Z",
          type: "pickup",
          duration: 0,
          pickups: ["cdec2e4a-dc32-49ed-9171-8d0fdfbfe117"],
          odometer: 33767,
          wait: 0
        },
        {
          location: "237 Arlene Rest Suite 148",
          location_metadata: {
            supplied_coordinate: [139.70151466192087, 35.64567545884881],
            snapped_coordinate: [139.701541, 35.645673]
          },
          eta: "2022-04-20T10:50:03Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["9519029a-a386-40fa-9c7b-63e7c7814f3f"],
          odometer: 34781,
          wait: 0
        },
        {
          location: "5483 Ronald Stream",
          location_metadata: {
            supplied_coordinate: [139.70524897308258, 35.66001034789852],
            snapped_coordinate: [139.705241, 35.660034]
          },
          eta: "2022-04-20T11:00:06Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["d68450e6-b061-4a33-863f-b7ce4e86266a"],
          odometer: 37893,
          wait: 0
        },
        {
          location: "78073 Strosin Rapids",
          location_metadata: {
            supplied_coordinate: [139.70338705157687, 35.665572885814775],
            snapped_coordinate: [139.703339, 35.665599]
          },
          eta: "2022-04-20T11:05:34Z",
          type: "pickup",
          duration: 0,
          pickups: ["15210fd9-7e12-45cc-8407-4d340a4738f5"],
          odometer: 39120,
          wait: 0
        },
        {
          location: "440 Tom Well",
          location_metadata: {
            supplied_coordinate: [139.7012275964267, 35.66306678360229],
            snapped_coordinate: [139.701056, 35.663182]
          },
          eta: "2022-04-20T11:07:02Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2649c069-ed29-40b0-8689-713d74100a60"],
          odometer: 39482,
          wait: 0
        },
        {
          location: "49886 Spencer Manors",
          location_metadata: {
            supplied_coordinate: [139.69697601897707, 35.66780267118799],
            snapped_coordinate: [139.696946, 35.668281]
          },
          eta: "2022-04-20T11:10:36Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["622de545-99b3-4d68-8ad3-e0efb57f62b8"],
          odometer: 40609,
          wait: 0
        },
        {
          location: "67491 Quigley Wells Suite 670",
          location_metadata: {
            supplied_coordinate: [139.68399365502356, 35.66815545180743],
            snapped_coordinate: [139.684065, 35.668132]
          },
          eta: "2022-04-20T11:14:11Z",
          type: "pickup",
          duration: 0,
          pickups: ["2b5f23db-e776-4816-ae83-5f609492aae1"],
          odometer: 41811,
          wait: 0
        },
        {
          location: "80388 Kub River",
          location_metadata: {
            supplied_coordinate: [139.68180440914537, 35.65853911655431],
            snapped_coordinate: [139.682138, 35.658473]
          },
          eta: "2022-04-20T11:19:56Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["296411e4-fc28-4abd-8e06-48546ca7aefc"],
          odometer: 43269,
          wait: 0
        },
        {
          location: "494 Marcus Springs Suite 363",
          location_metadata: {
            supplied_coordinate: [139.6710023087514, 35.66028428730073],
            snapped_coordinate: [139.671078, 35.660436]
          },
          eta: "2022-04-20T11:24:16Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3582ec30-b466-4a8c-a195-b09eb031eb40"],
          odometer: 44699,
          wait: 0
        },
        {
          location: "199 Mayert Village",
          location_metadata: {
            supplied_coordinate: [139.6684286602783, 35.656694223862665],
            snapped_coordinate: [139.668822, 35.656769]
          },
          eta: "2022-04-20T11:26:40Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["9aee55b1-8a22-41d8-9bd8-adf667db5dc5"],
          odometer: 45214,
          wait: 0
        },
        {
          location: "68809 Cedric Pass",
          location_metadata: {
            supplied_coordinate: [139.6673736446436, 35.65394199822136],
            snapped_coordinate: [139.667211, 35.653943]
          },
          eta: "2022-04-20T11:28:55Z",
          type: "pickup",
          duration: 0,
          pickups: ["32866220-0d71-4934-81e3-7bfe8995e0b6"],
          odometer: 45657,
          wait: 0
        },
        {
          location: "08329 April Camp Suite 788",
          location_metadata: {
            supplied_coordinate: [139.6711894882677, 35.64885718775506],
            snapped_coordinate: [139.670977, 35.648862]
          },
          eta: "2022-04-20T11:32:18Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["60de73f6-e849-4b3e-9071-d7feb70719ed"],
          odometer: 46492,
          wait: 0
        },
        {
          location: "220 Tomas Stravenue Apt. 202",
          location_metadata: {
            supplied_coordinate: [139.67305850454306, 35.649777300338634],
            snapped_coordinate: [139.673066, 35.649757]
          },
          eta: "2022-04-20T11:34:01Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["86e2dc7e-8d97-436a-801b-6be89e5aef8e"],
          odometer: 46811,
          wait: 0
        },
        {
          location: "944 Bradtke Junctions Suite 662",
          location_metadata: {
            supplied_coordinate: [139.67980761656764, 35.64661733704286],
            snapped_coordinate: [139.679927, 35.646767]
          },
          eta: "2022-04-20T11:38:39Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["4de0a52d-59ba-4ff4-8dff-a0c0f6a67c45"],
          odometer: 47932,
          wait: 0
        },
        {
          location: "492 Lula Canyon Suite 452",
          location_metadata: {
            supplied_coordinate: [139.68520983431068, 35.64225517697961],
            snapped_coordinate: [139.685463, 35.642273]
          },
          eta: "2022-04-20T11:42:16Z",
          type: "pickup",
          duration: 0,
          pickups: ["21c2eb89-358a-48e8-826a-a927b449cf72"],
          odometer: 48937,
          wait: 0
        },
        {
          location: "7729 Lucille Cape",
          location_metadata: {
            supplied_coordinate: [139.66551146338395, 35.64578917833884],
            snapped_coordinate: [139.665391, 35.64575]
          },
          eta: "2022-04-20T11:53:55Z",
          type: "pickup",
          duration: 0,
          pickups: ["09126a32-0936-4721-b88b-93be2cac7615"],
          odometer: 52054,
          wait: 0
        },
        {
          location: "99053 Kim Mountain",
          location_metadata: {
            supplied_coordinate: [139.65348573521533, 35.64224000338397],
            snapped_coordinate: [139.653498, 35.64224]
          },
          eta: "2022-04-20T12:00:03Z",
          type: "pickup",
          duration: 0,
          pickups: ["67e7120e-57bf-4ac0-a787-c1deb6c8f99b"],
          odometer: 53422,
          wait: 0
        },
        {
          location: "15994 Mante Meadow Suite 060",
          location_metadata: {
            supplied_coordinate: [139.63160821268394, 35.64441014478565],
            snapped_coordinate: [139.631759, 35.644434]
          },
          eta: "2022-04-20T12:08:15Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["47598745-aed0-41c6-958d-1dd65bec1f11"],
          odometer: 55569,
          wait: 0
        },
        {
          location: "469 Ray Ville Suite 844",
          location_metadata: {
            supplied_coordinate: [139.6285587221008, 35.64252658524768],
            snapped_coordinate: [139.628675, 35.642495]
          },
          eta: "2022-04-20T12:10:52Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["598efe6d-1deb-4b99-ac9e-33faeaa7318f"],
          odometer: 56223,
          wait: 0
        },
        {
          location: "26120 Ferry Park Suite 046",
          location_metadata: {
            supplied_coordinate: [139.61854300763312, 35.64173370378292],
            snapped_coordinate: [139.618539, 35.641767]
          },
          eta: "2022-04-20T12:16:37Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3d10d7bc-17a1-43e7-bc90-9dac584a2f77"],
          odometer: 57702,
          wait: 0
        },
        {
          location: "3947 Williamson Bypass",
          location_metadata: {
            supplied_coordinate: [139.6211385309241, 35.65568094870981],
            snapped_coordinate: [139.621143, 35.655692]
          },
          eta: "2022-04-20T12:24:10Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["94e15766-b6e8-4b5c-87db-0b28cd36e289"],
          odometer: 59490,
          wait: 0
        },
        {
          location: "14211 Graham Valley",
          location_metadata: {
            supplied_coordinate: [139.63164334771756, 35.64981100941691],
            snapped_coordinate: [139.631613, 35.649863]
          },
          eta: "2022-04-20T12:29:27Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["24f2f2a5-48b2-4a77-b596-6e6480a6a909"],
          odometer: 60927,
          wait: 0
        },
        {
          location: "020 Stehr Coves Suite 142",
          location_metadata: {
            supplied_coordinate: [139.63860101284703, 35.64900048289398],
            snapped_coordinate: [139.638601, 35.649077]
          },
          eta: "2022-04-20T12:31:59Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b2a7f9eb-5a78-4fe9-a09e-0f6d75bb82d6"],
          odometer: 61653,
          wait: 0
        },
        {
          location: "70671 Merle Radial Apt. 392",
          location_metadata: {
            supplied_coordinate: [139.65940512289922, 35.6541693631825],
            snapped_coordinate: [139.659324, 35.654204]
          },
          eta: "2022-04-20T12:40:52Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["7891a201-d176-4ecd-aec2-25cf833e600a"],
          odometer: 64042,
          wait: 0
        },
        {
          location: "30259 Dooley Land",
          location_metadata: {
            supplied_coordinate: [139.65788487857222, 35.66887454354299],
            snapped_coordinate: [139.658024, 35.668584]
          },
          eta: "2022-04-20T12:49:07Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["de1d7e78-92c9-4789-93be-446cc5866c5c"],
          odometer: 65887,
          wait: 0
        },
        {
          location: "62671 Gustavo Key",
          location_metadata: {
            supplied_coordinate: [139.6531738907226, 35.66985699956666],
            snapped_coordinate: [139.653278, 35.669866]
          },
          eta: "2022-04-20T12:51:44Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["752c1eed-bd4c-4a0f-8670-301b48eacf72"],
          odometer: 66496,
          wait: 0
        },
        {
          location: "84164 Thelma Motorway Apt. 473",
          location_metadata: {
            supplied_coordinate: [139.651223627913, 35.67137646863942],
            snapped_coordinate: [139.651226, 35.671407]
          },
          eta: "2022-04-20T12:54:05Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["10f64d3f-14bf-4a09-9b75-052c3ca7d168"],
          odometer: 67046,
          wait: 0
        },
        {
          location: "85883 Darlene Village Suite 012",
          location_metadata: {
            supplied_coordinate: [139.65212691873316, 35.670507201908144],
            snapped_coordinate: [139.652118, 35.670544]
          },
          eta: "2022-04-20T13:00:45Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["ff78d3b0-a142-4364-aefd-cdbe7c92cefd"],
          odometer: 69432,
          wait: 0
        },
        {
          location: "755 Bashirian Stravenue",
          location_metadata: {
            supplied_coordinate: [139.6810054373703, 35.68443828999214],
            snapped_coordinate: [139.68088, 35.684375]
          },
          eta: "2022-04-20T13:10:31Z",
          type: "pickup",
          duration: 0,
          pickups: ["90f02b15-1b42-4ac7-8579-996fa4f4e59e"],
          odometer: 73119,
          wait: 0
        },
        {
          location: "3930 Sadie Lodge",
          location_metadata: {
            supplied_coordinate: [139.66999356012246, 35.67790955318216],
            snapped_coordinate: [139.669984, 35.678002]
          },
          eta: "2022-04-20T13:16:26Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["e7ac2341-cdae-486f-8f3d-4eb32c428e25"],
          odometer: 74672,
          wait: 0
        },
        {
          location: "73400 Hilll Fields Suite 483",
          location_metadata: {
            supplied_coordinate: [139.6721572152204, 35.66959652843388],
            snapped_coordinate: [139.672195, 35.669518]
          },
          eta: "2022-04-20T13:22:40Z",
          type: "pickup",
          duration: 0,
          pickups: ["02321eab-e1b7-4a46-9cba-e71320f615f8"],
          odometer: 75835,
          wait: 0
        },
        {
          location: "74513 Alyssa Meadows",
          location_metadata: {
            supplied_coordinate: [139.670453568051, 35.66866606604743],
            snapped_coordinate: [139.670453, 35.668651]
          },
          eta: "2022-04-20T13:26:09Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["45f92a6a-76c4-473b-8d45-e3b72c76ad3c"],
          odometer: 76317,
          wait: 0
        },
        {
          location: "413 Klein Camp Suite 543",
          location_metadata: {
            supplied_coordinate: [139.67727281526612, 35.673254005722434],
            snapped_coordinate: [139.677437, 35.673105]
          },
          eta: "2022-04-20T13:30:31Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["d23080f7-8832-47a5-8aa5-f0c01b26d879"],
          odometer: 77491,
          wait: 0
        },
        {
          location: "43058 Kemmer Walk Suite 551",
          location_metadata: {
            supplied_coordinate: [139.67625360874914, 35.67511756808919],
            snapped_coordinate: [139.676423, 35.675265]
          },
          eta: "2022-04-20T13:32:08Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3aa7d8c0-9e30-4fa2-92ba-425e52079379"],
          odometer: 77835,
          wait: 0
        },
        {
          location: "5284 Runolfsson Forks",
          location_metadata: {
            supplied_coordinate: [139.63861754406034, 35.667341490272605],
            snapped_coordinate: [139.638619, 35.667351]
          },
          eta: "2022-04-20T13:39:19Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["cc56ef11-990b-43a4-ad02-3a792ff2ecba"],
          odometer: 81768,
          wait: 0
        },
        {
          location: "779 Peggy Fall",
          location_metadata: {
            supplied_coordinate: [139.6242435052382, 35.674994628224276],
            snapped_coordinate: [139.624253, 35.674791]
          },
          eta: "2022-04-20T13:43:32Z",
          type: "pickup",
          duration: 0,
          pickups: ["0cee83c4-83b9-4e4b-a673-468395ea261f"],
          odometer: 83580,
          wait: 0
        },
        {
          location: "717 Blanca Road Apt. 547",
          location_metadata: {
            supplied_coordinate: [139.62813211453553, 35.676789979112236],
            snapped_coordinate: [139.628237, 35.676757]
          },
          eta: "2022-04-20T13:45:51Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3897e1d8-2caa-4fe7-903b-8704c142e420"],
          odometer: 84080,
          wait: 0
        },
        {
          location: "47425 Lorraine Mountains",
          location_metadata: {
            supplied_coordinate: [139.62918647493174, 35.68484215297938],
            snapped_coordinate: [139.629214, 35.684683]
          },
          eta: "2022-04-20T13:50:31Z",
          type: "pickup",
          duration: 0,
          pickups: ["ee3630d1-f512-4ff9-8a92-6d25df0dc233"],
          odometer: 85118,
          wait: 0
        },
        {
          location: "803 Jeff Mountain Apt. 635",
          location_metadata: {
            supplied_coordinate: [139.63544022999625, 35.68558520743155],
            snapped_coordinate: [139.63545, 35.68557]
          },
          eta: "2022-04-20T13:53:53Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b4b881f3-2566-44f1-aa53-624c69ef7023"],
          odometer: 86035,
          wait: 0
        },
        {
          location: "90441 Laurie Walks Apt. 475",
          location_metadata: {
            supplied_coordinate: [139.63414421814335, 35.69783856850968],
            snapped_coordinate: [139.634091, 35.697764]
          },
          eta: "2022-04-20T14:02:08Z",
          type: "pickup",
          duration: 0,
          pickups: ["a453525d-6c85-4671-a1c9-7b2677321944"],
          odometer: 88187,
          wait: 0
        },
        {
          location: "45058 Lesch Vista Suite 993",
          location_metadata: {
            supplied_coordinate: [139.6523704061124, 35.69933077228635],
            snapped_coordinate: [139.652396, 35.699327]
          },
          eta: "2022-04-20T14:12:57Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["836b2d63-d17c-4c39-adda-8d15e2e3848c"],
          odometer: 90545,
          wait: 0
        },
        {
          location: "9601 Angelo Burgs Suite 798",
          location_metadata: {
            supplied_coordinate: [139.6537110426718, 35.689830809759044],
            snapped_coordinate: [139.653931, 35.689828]
          },
          eta: "2022-04-20T14:19:46Z",
          type: "pickup",
          duration: 0,
          pickups: ["09b40fb2-32f2-4ef5-806f-19e63d8397d5"],
          odometer: 92214,
          wait: 0
        },
        {
          location: "254 Allison Plains",
          location_metadata: {
            supplied_coordinate: [139.64564717482116, 35.6797935357226],
            snapped_coordinate: [139.645633, 35.679769]
          },
          eta: "2022-04-20T14:27:10Z",
          type: "pickup",
          duration: 0,
          pickups: ["5445c34a-6438-430c-9aba-7f47cad69675"],
          odometer: 94208,
          wait: 0
        },
        {
          location: "518 Labadie Burgs Suite 363",
          location_metadata: {
            supplied_coordinate: [139.65046919468895, 35.68178730024435],
            snapped_coordinate: [139.650542, 35.681842]
          },
          eta: "2022-04-20T14:29:28Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b20af625-b7c6-457d-b1cf-d9de2fc06ccf"],
          odometer: 94931,
          wait: 0
        },
        {
          location: "7935 Williamson Stream Apt. 706",
          location_metadata: {
            supplied_coordinate: [139.65737059622947, 35.68282475214216],
            snapped_coordinate: [139.657374, 35.682772]
          },
          eta: "2022-04-20T14:32:31Z",
          type: "pickup",
          duration: 0,
          pickups: ["01800e7b-7e12-4a33-9d52-e411417d8e23"],
          odometer: 95688,
          wait: 0
        },
        {
          location: "0236 Hegmann Garden Apt. 465",
          location_metadata: {
            supplied_coordinate: [139.6677324442566, 35.6852106173434],
            snapped_coordinate: [139.667734, 35.685269]
          },
          eta: "2022-04-20T14:36:46Z",
          type: "pickup",
          duration: 0,
          pickups: ["f5521af5-bc5c-4536-b839-4e33a0598a8d"],
          odometer: 96855,
          wait: 0
        },
        {
          location: "5243 Josefina Trail",
          location_metadata: {
            supplied_coordinate: [139.67188768098555, 35.68514004064727],
            snapped_coordinate: [139.671868, 35.685257]
          },
          eta: "2022-04-20T14:39:29Z",
          type: "pickup",
          duration: 0,
          pickups: ["b31d8b1e-60d5-45ee-b0d1-797478e56541"],
          odometer: 97511,
          wait: 0
        },
        {
          location: "448 Haag Ways Suite 280",
          location_metadata: {
            supplied_coordinate: [139.67872228226173, 35.68907224371926],
            snapped_coordinate: [139.678564, 35.689009]
          },
          eta: "2022-04-20T14:42:58Z",
          type: "pickup",
          duration: 0,
          pickups: ["6d3a949d-cd02-4e6b-83ee-46133c5ae037"],
          odometer: 98443,
          wait: 0
        },
        {
          location: "03371 Terry Terrace",
          location_metadata: {
            supplied_coordinate: [139.68309887067872, 35.69662092458087],
            snapped_coordinate: [139.682946, 35.696635]
          },
          eta: "2022-04-20T15:06:51Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["47c056e5-c002-44b1-af08-d1142a531707"],
          odometer: 107235,
          wait: 0
        },
        {
          location: "187 Evelyn Estates Apt. 745",
          location_metadata: {
            supplied_coordinate: [139.68370507101477, 35.69177781091238],
            snapped_coordinate: [139.683675, 35.691795]
          },
          eta: "2022-04-20T15:10:41Z",
          type: "pickup",
          duration: 0,
          pickups: ["da6cf55f-3d33-4783-bd1b-490f3e8c20cc"],
          odometer: 107897,
          wait: 0
        },
        {
          location: "343 Cartwright Center Suite 648",
          location_metadata: {
            supplied_coordinate: [139.69127437192714, 35.69502769809743],
            snapped_coordinate: [139.69128, 35.695026]
          },
          eta: "2022-04-20T15:15:27Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["60dc884b-e80a-45d1-a158-ca0b96fcabcf"],
          odometer: 109077,
          wait: 0
        },
        {
          location: "71741 Mosciski Grove Apt. 233",
          location_metadata: {
            supplied_coordinate: [139.69433910103896, 35.694066825613135],
            snapped_coordinate: [139.694299, 35.693982]
          },
          eta: "2022-04-20T15:16:19Z",
          type: "pickup",
          duration: 0,
          pickups: ["9b612b12-722a-4d24-be90-fec93ca03a53"],
          odometer: 109377,
          wait: 0
        },
        {
          location: "96379 Tomas Drive",
          location_metadata: {
            supplied_coordinate: [139.69605870900327, 35.6999881487161],
            snapped_coordinate: [139.696049, 35.700007]
          },
          eta: "2022-04-20T15:20:36Z",
          type: "pickup",
          duration: 0,
          pickups: ["4a76827d-f99e-4b0e-b5ba-7bb99f4b036a"],
          odometer: 110477,
          wait: 0
        },
        {
          location: "41006 Jones Court",
          location_metadata: {
            supplied_coordinate: [139.70971336459638, 35.6945419297281],
            snapped_coordinate: [139.709732, 35.694539]
          },
          eta: "2022-04-20T15:29:18Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2d168c97-107e-4b91-badd-601dbb63f07e"],
          odometer: 112787,
          wait: 0
        },
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T15:36:51Z",
          type: "dropoff",
          duration: 0,
          dropoffs: [
            "15210fd9-7e12-45cc-8407-4d340a4738f5",
            "90f02b15-1b42-4ac7-8579-996fa4f4e59e",
            "01800e7b-7e12-4a33-9d52-e411417d8e23",
            "b31d8b1e-60d5-45ee-b0d1-797478e56541",
            "af685a38-50a9-41d5-b844-5f5dfdf9c772"
          ],
          odometer: 114912,
          wait: 0
        },
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T15:36:51Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "a43c2c82-2c88-4ee0-94e1-de1dd0e5d996",
            "cd7e71b6-57f6-4d32-b8d6-39e6a580cd04"
          ],
          odometer: 114912,
          wait: 0
        },
        {
          location: "1110 Bashirian Pine",
          location_metadata: {
            supplied_coordinate: [139.71954027747063, 35.69712135166556],
            snapped_coordinate: [139.719113, 35.696829]
          },
          eta: "2022-04-20T15:46:07Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["a43c2c82-2c88-4ee0-94e1-de1dd0e5d996"],
          odometer: 116515,
          wait: 0
        },
        {
          location: "8136 Conrad Parkway Apt. 289",
          location_metadata: {
            supplied_coordinate: [139.7063197447164, 35.69046771174014],
            snapped_coordinate: [139.706232, 35.690508]
          },
          eta: "2022-04-20T15:55:56Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["5dfe043b-d3d8-4401-8a50-964115f7f282"],
          odometer: 118633,
          wait: 0
        },
        {
          location: "0534 Ortiz Courts Suite 245",
          location_metadata: {
            supplied_coordinate: [139.67960119877276, 35.68019974009101],
            snapped_coordinate: [139.679352, 35.680042]
          },
          eta: "2022-04-20T16:04:54Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["cd7e71b6-57f6-4d32-b8d6-39e6a580cd04"],
          odometer: 121685,
          wait: 0
        },
        {
          location: "0442 Greenfelder Street",
          location_metadata: {
            supplied_coordinate: [139.679471734674, 35.678968338343836],
            snapped_coordinate: [139.679475, 35.678941]
          },
          eta: "2022-04-20T16:05:58Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["15403ee8-630f-4e6f-aa1b-fb2a0117a17b"],
          odometer: 121875,
          wait: 0
        },
        {
          location: "8087 Benny Gardens Suite 068",
          location_metadata: {
            supplied_coordinate: [139.6889543236078, 35.68413348274423],
            snapped_coordinate: [139.688946, 35.684146]
          },
          eta: "2022-04-20T16:09:51Z",
          type: "pickup",
          duration: 0,
          pickups: ["ffd9c720-0e2c-4b51-a648-118f886dddbe"],
          odometer: 123259,
          wait: 0
        },
        {
          location: "8591 Kelley Way Suite 104",
          location_metadata: {
            supplied_coordinate: [139.68842960985674, 35.677704139438234],
            snapped_coordinate: [139.688391, 35.677587]
          },
          eta: "2022-04-20T16:14:36Z",
          type: "pickup",
          duration: 0,
          pickups: ["71df0c53-46aa-49f8-a5cf-af4116da6f3d"],
          odometer: 124596,
          wait: 0
        },
        {
          location: "8593 Eduardo Estates",
          location_metadata: {
            supplied_coordinate: [139.6907443490118, 35.669802374765894],
            snapped_coordinate: [139.690826, 35.669802]
          },
          eta: "2022-04-20T16:19:35Z",
          type: "pickup",
          duration: 0,
          pickups: ["decba6fb-b9a5-4de6-a246-9f52f33ce7ec"],
          odometer: 125759,
          wait: 0
        },
        {
          location: "23126 Cathy Flat Suite 894",
          location_metadata: {
            supplied_coordinate: [139.69470038964096, 35.66367737199923],
            snapped_coordinate: [139.694628, 35.663462]
          },
          eta: "2022-04-20T16:23:00Z",
          type: "pickup",
          duration: 0,
          pickups: ["bdf13e45-26eb-43a8-8279-5d1fb29dd2ff"],
          odometer: 126696,
          wait: 0
        },
        {
          location: "5081 Phillip Summit Apt. 952",
          location_metadata: {
            supplied_coordinate: [139.69633706477254, 35.66380947035935],
            snapped_coordinate: [139.696145, 35.664009]
          },
          eta: "2022-04-20T16:23:59Z",
          type: "pickup",
          duration: 0,
          pickups: ["bd9c4cd7-a48d-415b-a679-050cec14cc61"],
          odometer: 126897,
          wait: 0
        },
        {
          location: "3430 Sharon Skyway",
          location_metadata: {
            supplied_coordinate: [139.70729983808002, 35.66842425515128],
            snapped_coordinate: [139.707276, 35.668435]
          },
          eta: "2022-04-20T16:31:17Z",
          type: "pickup",
          duration: 0,
          pickups: ["85e083ab-eb65-44aa-ba86-c1dc48b33dad"],
          odometer: 128703,
          wait: 0
        },
        {
          location: "1575 Brakus Club Apt. 667",
          location_metadata: {
            supplied_coordinate: [139.7126648015734, 35.672386963909474],
            snapped_coordinate: [139.712661, 35.672374]
          },
          eta: "2022-04-20T16:35:10Z",
          type: "pickup",
          duration: 0,
          pickups: ["b8056f58-fe63-4610-9d73-1ac70e637bc5"],
          odometer: 129485,
          wait: 0
        },
        {
          location: "498 Zulauf Coves",
          location_metadata: {
            supplied_coordinate: [139.71427691728334, 35.672338889378494],
            snapped_coordinate: [139.714292, 35.672336]
          },
          eta: "2022-04-20T16:35:49Z",
          type: "pickup",
          duration: 0,
          pickups: ["aad3e223-49bf-4b4d-975d-013a643948b1"],
          odometer: 129658,
          wait: 0
        },
        {
          location: "841 Nancy Square",
          location_metadata: {
            supplied_coordinate: [139.71693477835495, 35.67366780937679],
            snapped_coordinate: [139.716261, 35.673443]
          },
          eta: "2022-04-20T16:37:57Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["ed3f3e92-ff2d-4aec-8a97-e2f923c7cc77"],
          odometer: 130148,
          wait: 0
        },
        {
          location: "931 Mabel Harbor Apt. 193",
          location_metadata: {
            supplied_coordinate: [139.7063414294938, 35.67810194775016],
            snapped_coordinate: [139.706292, 35.678054]
          },
          eta: "2022-04-20T16:42:56Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["ebb70ac5-1495-4fcf-896c-7b3fba5c9669"],
          odometer: 131368,
          wait: 0
        },
        {
          location: "8091 Marty Track",
          location_metadata: {
            supplied_coordinate: [139.70814877198137, 35.68425010484965],
            snapped_coordinate: [139.707161, 35.682991]
          },
          eta: "2022-04-20T16:46:44Z",
          type: "pickup",
          duration: 0,
          pickups: ["33db5b70-5484-4f37-9932-4e71b5583b83"],
          odometer: 132354,
          wait: 0
        },
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T16:55:13Z",
          type: "dropoff",
          duration: 0,
          dropoffs: [
            "b4ad889b-45c2-4b71-ae8e-8224ebe5ecf8",
            "aad3e223-49bf-4b4d-975d-013a643948b1",
            "decba6fb-b9a5-4de6-a246-9f52f33ce7ec",
            "da6cf55f-3d33-4783-bd1b-490f3e8c20cc",
            "00f9136f-bd36-4234-bd50-426dbabf1af4",
            "ba5e0922-f3a1-4240-ab59-584297cf6bad",
            "3a210864-d5b6-4c4e-8635-cfc1fc84cb1d",
            "a453525d-6c85-4671-a1c9-7b2677321944",
            "9c025cf0-35b7-401e-a86a-969c71a480cc",
            "cdec2e4a-dc32-49ed-9171-8d0fdfbfe117",
            "8bdb3765-342c-4a30-bf6b-70c33a43546f",
            "f67274b5-6079-4b38-936c-8ab21d7dfb46",
            "21c2eb89-358a-48e8-826a-a927b449cf72",
            "67e7120e-57bf-4ac0-a787-c1deb6c8f99b",
            "09126a32-0936-4721-b88b-93be2cac7615",
            "32866220-0d71-4934-81e3-7bfe8995e0b6",
            "ee3630d1-f512-4ff9-8a92-6d25df0dc233",
            "0cee83c4-83b9-4e4b-a673-468395ea261f",
            "09b40fb2-32f2-4ef5-806f-19e63d8397d5",
            "5445c34a-6438-430c-9aba-7f47cad69675",
            "4a76827d-f99e-4b0e-b5ba-7bb99f4b036a",
            "9b612b12-722a-4d24-be90-fec93ca03a53",
            "f5521af5-bc5c-4536-b839-4e33a0598a8d",
            "6d3a949d-cd02-4e6b-83ee-46133c5ae037",
            "02321eab-e1b7-4a46-9cba-e71320f615f8",
            "71df0c53-46aa-49f8-a5cf-af4116da6f3d",
            "ffd9c720-0e2c-4b51-a648-118f886dddbe",
            "e8f9b31c-7119-4449-864c-0ef4e24a6a34",
            "2b5f23db-e776-4816-ae83-5f609492aae1",
            "bdf13e45-26eb-43a8-8279-5d1fb29dd2ff",
            "bd9c4cd7-a48d-415b-a679-050cec14cc61",
            "85e083ab-eb65-44aa-ba86-c1dc48b33dad",
            "33db5b70-5484-4f37-9932-4e71b5583b83",
            "b8056f58-fe63-4610-9d73-1ac70e637bc5",
            "7541295f-cfcc-44a9-a1f5-bc221d5d5e0a"
          ],
          odometer: 134898,
          wait: 0
        },
        {
          location: "11647 Denesik Extension Suite 005",
          location_metadata: {
            supplied_coordinate: [139.72285122298797, 35.68967417209965],
            snapped_coordinate: [139.722964, 35.689772]
          },
          eta: "2022-04-20T16:55:13Z",
          type: "end",
          odometer: 134898
        }
      ]
    }
  ],
  version: 1
};

const solution2 = {
  dropped: {
    services: [],
    shipments: []
  },
  routes: [
    {
      vehicle: "e03fbf74-3ba6-462a-9358-7d146942d493",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:48:52Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:48:52Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "29b399eb-2cdc-4d1a-8dc2-d7b2040949bc",
            "3dee6f1a-1a11-4792-9ca8-dfc31a25cee0",
            "594130e5-6704-4b3d-ab6f-551657f06eb2",
            "b7bf7aed-9351-46a4-a758-ca64f1563439",
            "f826b069-4a88-43a6-a02c-24a53858844b",
            "a5c2c02b-6014-4f2a-8fbc-9e44e047b5d7",
            "9868b1ec-dfae-432b-8f9f-48ad0952bc09",
            "1fbfabef-bd42-424c-9939-b7974383d707",
            "81336669-6fce-44bd-aeb1-fda54455282d",
            "1c71aa08-2db9-447b-bb5e-fc94dc243756",
            "b716b6f2-94af-4f14-bfac-1d3a8b559a91",
            "f146d80a-7bd3-4edd-a233-4e364e58c5cf"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "627 Ricardo Villages",
          location_metadata: {
            supplied_coordinate: [106.84408159696764, -6.155603183202906],
            snapped_coordinate: [106.844108, -6.155735]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["f146d80a-7bd3-4edd-a233-4e364e58c5cf"],
          odometer: 3894,
          wait: 0
        },
        {
          location: "09457 Nicole Hill",
          location_metadata: {
            supplied_coordinate: [106.87722884175722, -6.1348063814142275],
            snapped_coordinate: [106.877222, -6.13485]
          },
          eta: "2022-04-20T08:15:12Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["594130e5-6704-4b3d-ab6f-551657f06eb2"],
          odometer: 9510,
          wait: 0
        },
        {
          location: "39785 MacGyver Lodge Apt. 632",
          location_metadata: {
            supplied_coordinate: [106.8797404251428, -6.142542029527583],
            snapped_coordinate: [106.879671, -6.142132]
          },
          eta: "2022-04-20T08:22:26Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["a5c2c02b-6014-4f2a-8fbc-9e44e047b5d7"],
          odometer: 11231,
          wait: 0
        },
        {
          location: "407 Monica Gardens",
          location_metadata: {
            supplied_coordinate: [106.88036753503827, -6.1440536123967835],
            snapped_coordinate: [106.880391, -6.144194]
          },
          eta: "2022-04-20T08:28:42Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b7bf7aed-9351-46a4-a758-ca64f1563439"],
          odometer: 12208,
          wait: 0
        },
        {
          location: "1361 Eric Island",
          location_metadata: {
            supplied_coordinate: [106.89488728767442, -6.1478223315181655],
            snapped_coordinate: [106.895037, -6.147555]
          },
          eta: "2022-04-20T08:42:19Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["f826b069-4a88-43a6-a02c-24a53858844b"],
          odometer: 15411,
          wait: 0
        },
        {
          location: "94206 Leannon Isle",
          location_metadata: {
            supplied_coordinate: [106.87084293657792, -6.167925749085515],
            snapped_coordinate: [106.870957, -6.167867]
          },
          eta: "2022-04-20T08:55:40Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b716b6f2-94af-4f14-bfac-1d3a8b559a91"],
          odometer: 21619,
          wait: 0
        },
        {
          location: "1078 Berge Lane",
          location_metadata: {
            supplied_coordinate: [106.89481362239584, -6.174377499083999],
            snapped_coordinate: [106.894875, -6.174318]
          },
          eta: "2022-04-20T09:03:06Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["81336669-6fce-44bd-aeb1-fda54455282d"],
          odometer: 24950,
          wait: 0
        },
        {
          location: "095 Virginia Cliffs Apt. 633",
          location_metadata: {
            supplied_coordinate: [106.91762409902844, -6.1533960802845575],
            snapped_coordinate: [106.917688, -6.153372]
          },
          eta: "2022-04-20T09:15:39Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["29b399eb-2cdc-4d1a-8dc2-d7b2040949bc"],
          odometer: 28951,
          wait: 0
        },
        {
          location: "1147 Hermiston Walk",
          location_metadata: {
            supplied_coordinate: [106.9247907452416, -6.209685986700651],
            snapped_coordinate: [106.924715, -6.209667]
          },
          eta: "2022-04-20T09:35:27Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3dee6f1a-1a11-4792-9ca8-dfc31a25cee0"],
          odometer: 36107,
          wait: 0
        },
        {
          location: "381 Barton Drive",
          location_metadata: {
            supplied_coordinate: [106.90656671927664, -6.192326252750395],
            snapped_coordinate: [106.906418, -6.192471]
          },
          eta: "2022-04-20T09:46:19Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["1fbfabef-bd42-424c-9939-b7974383d707"],
          odometer: 39814,
          wait: 0
        },
        {
          location: "476 Gretchen Parks",
          location_metadata: {
            supplied_coordinate: [106.8884572740396, -6.197467823007898],
            snapped_coordinate: [106.888506, -6.197467]
          },
          eta: "2022-04-20T09:55:49Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["9868b1ec-dfae-432b-8f9f-48ad0952bc09"],
          odometer: 42609,
          wait: 0
        },
        {
          location: "147 Blick Lake",
          location_metadata: {
            supplied_coordinate: [106.85214657240002, -6.197927030385042],
            snapped_coordinate: [106.852169, -6.197901]
          },
          eta: "2022-04-20T10:11:45Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["1c71aa08-2db9-447b-bb5e-fc94dc243756"],
          odometer: 47334,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T10:29:13Z",
          type: "end",
          odometer: 53306
        }
      ]
    },
    {
      vehicle: "2ca21805-8e37-4535-80d4-d8bf71c0b9a6",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:31:54Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:31:54Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "55180fee-188a-4396-98ca-9585a3abdaea",
            "af00039a-3f42-41da-8d50-011180022b2a",
            "90cc8124-db84-44c8-a1f2-fbd4599694d8",
            "719bfd26-2ea8-419a-82e1-4431612f7b46",
            "557d3ab0-df13-4744-9f0a-781b6e641fe2",
            "9dade4d8-b235-4f6f-b6ee-18b4eb341f50",
            "6678c2c2-7db0-4900-98dc-95c3fe4b372f",
            "3ef84492-96f2-44d2-8952-cebee89301e6",
            "bcc4aeea-a5f7-4316-b892-76ac8cfc35a5",
            "e43fb7ec-e4d5-4272-ba3b-b21a98e80bf9",
            "9bc2c0d5-85b9-4167-93fc-13517cdf8bd2"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "7429 Hirthe Haven",
          location_metadata: {
            supplied_coordinate: [106.78371872544194, -6.207856762073951],
            snapped_coordinate: [106.783719, -6.2078]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["55180fee-188a-4396-98ca-9585a3abdaea"],
          odometer: 8514,
          wait: 0
        },
        {
          location: "0984 Wilkinson Square Apt. 452",
          location_metadata: {
            supplied_coordinate: [106.72179753441856, -6.22336612165037],
            snapped_coordinate: [106.721933, -6.223402]
          },
          eta: "2022-04-20T08:26:52Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["9dade4d8-b235-4f6f-b6ee-18b4eb341f50"],
          odometer: 16884,
          wait: 0
        },
        {
          location: "1656 Ignacio Valley",
          location_metadata: {
            supplied_coordinate: [106.72841470863702, -6.230413004286734],
            snapped_coordinate: [106.728418, -6.230414]
          },
          eta: "2022-04-20T08:34:56Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["90cc8124-db84-44c8-a1f2-fbd4599694d8"],
          odometer: 19112,
          wait: 0
        },
        {
          location: "67911 Schroeder Causeway",
          location_metadata: {
            supplied_coordinate: [106.73351158479932, -6.235228121571183],
            snapped_coordinate: [106.733604, -6.235228]
          },
          eta: "2022-04-20T08:43:14Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["af00039a-3f42-41da-8d50-011180022b2a"],
          odometer: 20342,
          wait: 0
        },
        {
          location: "684 Kutch Creek",
          location_metadata: {
            supplied_coordinate: [106.71052663402288, -6.235821341398031],
            snapped_coordinate: [106.710555, -6.235822]
          },
          eta: "2022-04-20T08:59:57Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["557d3ab0-df13-4744-9f0a-781b6e641fe2"],
          odometer: 24431,
          wait: 0
        },
        {
          location: "324 Willard Gardens Suite 310",
          location_metadata: {
            supplied_coordinate: [106.70489318902077, -6.243325981337369],
            snapped_coordinate: [106.704853, -6.242964]
          },
          eta: "2022-04-20T09:06:06Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["719bfd26-2ea8-419a-82e1-4431612f7b46"],
          odometer: 25794,
          wait: 0
        },
        {
          location: "54403 Denesik Parkways Suite 427",
          location_metadata: {
            supplied_coordinate: [106.71580678432346, -6.203361485712706],
            snapped_coordinate: [106.715905, -6.203596]
          },
          eta: "2022-04-20T09:22:48Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["6678c2c2-7db0-4900-98dc-95c3fe4b372f"],
          odometer: 30877,
          wait: 0
        },
        {
          location: "045 Lucia Extensions Suite 235",
          location_metadata: {
            supplied_coordinate: [106.72774630366578, -6.174774151670226],
            snapped_coordinate: [106.728049, -6.174753]
          },
          eta: "2022-04-20T09:35:15Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3ef84492-96f2-44d2-8952-cebee89301e6"],
          odometer: 35124,
          wait: 0
        },
        {
          location: "049 Howell Oval Suite 057",
          location_metadata: {
            supplied_coordinate: [106.7417556102181, -6.159851575664633],
            snapped_coordinate: [106.74174, -6.15948]
          },
          eta: "2022-04-20T09:48:29Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["bcc4aeea-a5f7-4316-b892-76ac8cfc35a5"],
          odometer: 39179,
          wait: 0
        },
        {
          location: "38915 Dana Ville",
          location_metadata: {
            supplied_coordinate: [106.74970300391172, -6.18103198190953],
            snapped_coordinate: [106.749695, -6.180972]
          },
          eta: "2022-04-20T10:01:32Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["e43fb7ec-e4d5-4272-ba3b-b21a98e80bf9"],
          odometer: 42694,
          wait: 0
        },
        {
          location: "4438 Gleichner Mountains Suite 372",
          location_metadata: {
            supplied_coordinate: [106.7685664549118, -6.183223249041014],
            snapped_coordinate: [106.768579, -6.183199]
          },
          eta: "2022-04-20T10:13:42Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["9bc2c0d5-85b9-4167-93fc-13517cdf8bd2"],
          odometer: 46951,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T10:36:23Z",
          type: "end",
          odometer: 55599
        }
      ]
    },
    {
      vehicle: "691a72ab-7308-4700-8149-17864d9ee2c6",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:38:57Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:38:57Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "ae00ad10-208c-4b58-b768-9fb28ecacb12",
            "05214320-a3b6-46dc-8331-67671effd6fc",
            "4130f928-df16-4ff9-9dc3-907d6245f1e1",
            "4117489f-6117-4ce7-902e-b2822e227102",
            "dcdea057-d01a-49d8-bd8a-32f816aff455",
            "a6b49c8f-f361-416b-a63d-d177da56bf75",
            "433acd1f-d0ac-43ef-b9a9-748a3d18c6d7",
            "dd70861c-17b3-4706-a86e-88d1a1947fee",
            "c4e5f8f6-3771-42e3-8129-c9f63c0ea1d9"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "21604 Corwin Turnpike Apt. 566",
          location_metadata: {
            supplied_coordinate: [106.7901215638475, -6.153467264216835],
            snapped_coordinate: [106.790136, -6.153357]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c4e5f8f6-3771-42e3-8129-c9f63c0ea1d9"],
          odometer: 7110,
          wait: 0
        },
        {
          location: "4771 Cheryl Fords Apt. 282",
          location_metadata: {
            supplied_coordinate: [106.77629020974295, -6.113346466343053],
            snapped_coordinate: [106.776317, -6.113241]
          },
          eta: "2022-04-20T08:22:34Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["dd70861c-17b3-4706-a86e-88d1a1947fee"],
          odometer: 14107,
          wait: 0
        },
        {
          location: "5060 Sue Landing Suite 823",
          location_metadata: {
            supplied_coordinate: [106.81684468927388, -6.226741989065283],
            snapped_coordinate: [106.817015, -6.226624]
          },
          eta: "2022-04-20T08:54:35Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["ae00ad10-208c-4b58-b768-9fb28ecacb12"],
          odometer: 32144,
          wait: 0
        },
        {
          location: "272 Torphy Knoll Apt. 244",
          location_metadata: {
            supplied_coordinate: [106.94367228485176, -6.255601268326186],
            snapped_coordinate: [106.943926, -6.255601]
          },
          eta: "2022-04-20T09:19:44Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["05214320-a3b6-46dc-8331-67671effd6fc"],
          odometer: 50478,
          wait: 0
        },
        {
          location: "3927 Bill Manor",
          location_metadata: {
            supplied_coordinate: [106.93405946021464, -6.119410271764324],
            snapped_coordinate: [106.934044, -6.1194]
          },
          eta: "2022-04-20T09:47:14Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["a6b49c8f-f361-416b-a63d-d177da56bf75"],
          odometer: 69904,
          wait: 0
        },
        {
          location: "947 Frederick Road Apt. 805",
          location_metadata: {
            supplied_coordinate: [106.9250939762583, -6.1364769199754425],
            snapped_coordinate: [106.925095, -6.13647]
          },
          eta: "2022-04-20T10:02:45Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["4117489f-6117-4ce7-902e-b2822e227102"],
          odometer: 74518,
          wait: 0
        },
        {
          location: "351 Vandervort Corners Suite 299",
          location_metadata: {
            supplied_coordinate: [106.92453607885231, -6.137278898875243],
            snapped_coordinate: [106.923922, -6.136818]
          },
          eta: "2022-04-20T10:03:52Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["dcdea057-d01a-49d8-bd8a-32f816aff455"],
          odometer: 74693,
          wait: 0
        },
        {
          location: "7032 Stoltenberg Islands",
          location_metadata: {
            supplied_coordinate: [106.90352368979916, -6.120510926692056],
            snapped_coordinate: [106.903461, -6.120507]
          },
          eta: "2022-04-20T10:20:50Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["4130f928-df16-4ff9-9dc3-907d6245f1e1"],
          odometer: 78946,
          wait: 0
        },
        {
          location: "22466 Nora Point Apt. 458",
          location_metadata: {
            supplied_coordinate: [106.85379966632536, -6.118225153736873],
            snapped_coordinate: [106.853801, -6.118687]
          },
          eta: "2022-04-20T10:54:51Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["433acd1f-d0ac-43ef-b9a9-748a3d18c6d7"],
          odometer: 92344,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:27:43Z",
          type: "end",
          odometer: 104606
        }
      ]
    },
    {
      vehicle: "1fd2167b-001d-4c16-8f76-a844d2be5a89",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:35:17Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:35:17Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "c69d7455-d61c-4511-96e7-c2deae30ef6c",
            "2bd37dea-5a69-4f69-95d5-20ec64347037",
            "b170db5f-01ae-47c6-972d-ee45ecb37385",
            "f2770d04-d734-4582-b1b7-2f3ed253785f",
            "7a94f8bf-f6dd-433e-a7d8-18f1cdcd81c3",
            "2098094b-b149-4593-8abb-d871a0fc4c80",
            "bd02ba99-fc29-4471-bbbc-9229e36109e7",
            "2c3acae4-4e01-4300-86aa-4a6f783a0044",
            "22b545fd-b7df-4d71-9eca-cdb39033129f",
            "acb03801-806e-410a-aadc-c7f7579de177",
            "b5e589da-9806-4d23-8671-69942807a33f",
            "1874584c-2f63-48ac-985e-7cd3c28fee31",
            "8a33e90b-ac61-41d2-a0a4-e171bc5776fc"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "261 Wisozk Ville",
          location_metadata: {
            supplied_coordinate: [106.8322193581949, -6.224302612238314],
            snapped_coordinate: [106.832, -6.224495]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c69d7455-d61c-4511-96e7-c2deae30ef6c"],
          odometer: 8729,
          wait: 0
        },
        {
          location: "3637 Fisher Pass Apt. 373",
          location_metadata: {
            supplied_coordinate: [106.8289557373555, -6.2462744613375465],
            snapped_coordinate: [106.82896, -6.246274]
          },
          eta: "2022-04-20T08:11:56Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["8a33e90b-ac61-41d2-a0a4-e171bc5776fc"],
          odometer: 12345,
          wait: 0
        },
        {
          location: "58154 Kuvalis Prairie",
          location_metadata: {
            supplied_coordinate: [106.82878632568128, -6.274129447989751],
            snapped_coordinate: [106.829256, -6.273684]
          },
          eta: "2022-04-20T08:24:46Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["1874584c-2f63-48ac-985e-7cd3c28fee31"],
          odometer: 16526,
          wait: 0
        },
        {
          location: "815 Ralph Pine Apt. 260",
          location_metadata: {
            supplied_coordinate: [106.84497479994728, -6.312329299567687],
            snapped_coordinate: [106.845078, -6.312399]
          },
          eta: "2022-04-20T08:50:56Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b170db5f-01ae-47c6-972d-ee45ecb37385"],
          odometer: 26067,
          wait: 0
        },
        {
          location: "751 Gaylord Springs",
          location_metadata: {
            supplied_coordinate: [106.89826617021278, -6.307811329723903],
            snapped_coordinate: [106.898328, -6.307669]
          },
          eta: "2022-04-20T09:15:12Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2098094b-b149-4593-8abb-d871a0fc4c80"],
          odometer: 34804,
          wait: 0
        },
        {
          location: "90777 Vanessa Manor",
          location_metadata: {
            supplied_coordinate: [106.9583819332936, -6.30033946514099],
            snapped_coordinate: [106.95839, -6.300342]
          },
          eta: "2022-04-20T09:35:06Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2bd37dea-5a69-4f69-95d5-20ec64347037"],
          odometer: 43596,
          wait: 0
        },
        {
          location: "91182 Heaney Plain",
          location_metadata: {
            supplied_coordinate: [106.90737752274862, -6.301152542480899],
            snapped_coordinate: [106.907378, -6.301215]
          },
          eta: "2022-04-20T09:57:55Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["f2770d04-d734-4582-b1b7-2f3ed253785f"],
          odometer: 51807,
          wait: 0
        },
        {
          location: "89597 Bashirian Rest",
          location_metadata: {
            supplied_coordinate: [106.89908411992228, -6.315113533187048],
            snapped_coordinate: [106.899095, -6.31514]
          },
          eta: "2022-04-20T10:09:20Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["bd02ba99-fc29-4471-bbbc-9229e36109e7"],
          odometer: 54721,
          wait: 0
        },
        {
          location: "2326 Purdy Village Apt. 300",
          location_metadata: {
            supplied_coordinate: [106.8876605513789, -6.307837098090673],
            snapped_coordinate: [106.887644, -6.307976]
          },
          eta: "2022-04-20T10:17:46Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["7a94f8bf-f6dd-433e-a7d8-18f1cdcd81c3"],
          odometer: 57009,
          wait: 0
        },
        {
          location: "49010 Abernathy Mill Apt. 568",
          location_metadata: {
            supplied_coordinate: [106.8754770574869, -6.291467024557727],
            snapped_coordinate: [106.87566, -6.291445]
          },
          eta: "2022-04-20T10:30:25Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2c3acae4-4e01-4300-86aa-4a6f783a0044"],
          odometer: 60809,
          wait: 0
        },
        {
          location: "435 Windler Fort",
          location_metadata: {
            supplied_coordinate: [106.86687323999844, -6.269698266067651],
            snapped_coordinate: [106.867058, -6.269587]
          },
          eta: "2022-04-20T10:40:26Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["acb03801-806e-410a-aadc-c7f7579de177"],
          odometer: 64114,
          wait: 0
        },
        {
          location: "840 Edith Street Apt. 796",
          location_metadata: {
            supplied_coordinate: [106.85959921548827, -6.265403940919162],
            snapped_coordinate: [106.859665, -6.265096]
          },
          eta: "2022-04-20T10:47:04Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["22b545fd-b7df-4d71-9eca-cdb39033129f"],
          odometer: 65413,
          wait: 0
        },
        {
          location: "0893 Windler Camp",
          location_metadata: {
            supplied_coordinate: [106.85854995331606, -6.2534648612219685],
            snapped_coordinate: [106.858566, -6.253608]
          },
          eta: "2022-04-20T10:59:46Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b5e589da-9806-4d23-8671-69942807a33f"],
          odometer: 67657,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:37:20Z",
          type: "end",
          odometer: 85987
        }
      ]
    },
    {
      vehicle: "f09c8124-ec78-4c46-9cb9-390d832ec27b",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:20:41Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:20:41Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "fe811bdc-d2d7-43ea-9ac3-d9d91933283a",
            "97b9c7b9-b11f-4f6a-a790-38c6fa0c530a",
            "7f4fa541-ea7f-4ef0-8d20-5975f801f83c",
            "c551f338-cace-4dfe-a0e3-d0c441e7640a",
            "96583d38-ab58-4626-9282-75cb293687c3",
            "cd8394d9-d924-4426-8479-e7f28c5d2b56",
            "f7cae22a-ca22-4fb3-8562-aded2048c29e",
            "c20a627e-1ae2-472c-b4cf-1cf949f4aaf3",
            "081e4dd8-fae9-4068-a33d-8272386994f7",
            "7c6720f8-67a9-485a-965d-539b0f8a6896",
            "2e52daa0-b6ab-49bd-9e26-8b910b7e7bec"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "327 Donnelly Shoals Suite 240",
          location_metadata: {
            supplied_coordinate: [106.65150582559612, -6.177119086276854],
            snapped_coordinate: [106.651433, -6.176769]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["cd8394d9-d924-4426-8479-e7f28c5d2b56"],
          odometer: 24775,
          wait: 0
        },
        {
          location: "7050 Treutel Trail",
          location_metadata: {
            supplied_coordinate: [106.6717029050464, -6.147909218258064],
            snapped_coordinate: [106.671545, -6.147844]
          },
          eta: "2022-04-20T08:28:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["97b9c7b9-b11f-4f6a-a790-38c6fa0c530a"],
          odometer: 34549,
          wait: 0
        },
        {
          location: "7587 Craig Motorway Apt. 826",
          location_metadata: {
            supplied_coordinate: [106.65098612362942, -6.146292554214161],
            snapped_coordinate: [106.652139, -6.146259]
          },
          eta: "2022-04-20T08:41:42Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["fe811bdc-d2d7-43ea-9ac3-d9d91933283a"],
          odometer: 37176,
          wait: 0
        },
        {
          location: "08380 Halvorson Manor",
          location_metadata: {
            supplied_coordinate: [106.64495393113285, -6.154822943561445],
            snapped_coordinate: [106.644955, -6.154784]
          },
          eta: "2022-04-20T08:54:14Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["96583d38-ab58-4626-9282-75cb293687c3"],
          odometer: 40269,
          wait: 0
        },
        {
          location: "171 Evelyn Creek Suite 819",
          location_metadata: {
            supplied_coordinate: [106.63176614638746, -6.145308606503524],
            snapped_coordinate: [106.631457, -6.145097]
          },
          eta: "2022-04-20T09:03:10Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c551f338-cace-4dfe-a0e3-d0c441e7640a"],
          odometer: 43334,
          wait: 0
        },
        {
          location: "0222 Joanne Skyway",
          location_metadata: {
            supplied_coordinate: [106.62981485523451, -6.131752032489658],
            snapped_coordinate: [106.62951, -6.131751]
          },
          eta: "2022-04-20T09:10:19Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["7f4fa541-ea7f-4ef0-8d20-5975f801f83c"],
          odometer: 45241,
          wait: 0
        },
        {
          location: "889 Halvorson Flat",
          location_metadata: {
            supplied_coordinate: [106.60517829163096, -6.138038160303886],
            snapped_coordinate: [106.604977, -6.138045]
          },
          eta: "2022-04-20T09:29:09Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["f7cae22a-ca22-4fb3-8562-aded2048c29e"],
          odometer: 50351,
          wait: 0
        },
        {
          location: "426 Kelly Squares",
          location_metadata: {
            supplied_coordinate: [106.59787593017036, -6.14296221164411],
            snapped_coordinate: [106.596977, -6.143408]
          },
          eta: "2022-04-20T09:34:18Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c20a627e-1ae2-472c-b4cf-1cf949f4aaf3"],
          odometer: 51645,
          wait: 0
        },
        {
          location: "92847 Mattie Mountain",
          location_metadata: {
            supplied_coordinate: [106.60246511489972, -6.199741563301279],
            snapped_coordinate: [106.602447, -6.199729]
          },
          eta: "2022-04-20T10:03:39Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["7c6720f8-67a9-485a-965d-539b0f8a6896"],
          odometer: 60190,
          wait: 0
        },
        {
          location: "9651 Cornelius Rue Apt. 635",
          location_metadata: {
            supplied_coordinate: [106.60357801013768, -6.2135102589874265],
            snapped_coordinate: [106.603617, -6.213377]
          },
          eta: "2022-04-20T10:15:18Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2e52daa0-b6ab-49bd-9e26-8b910b7e7bec"],
          odometer: 62545,
          wait: 0
        },
        {
          location: "9087 Warren Route",
          location_metadata: {
            supplied_coordinate: [106.60338237337668, -6.230424647405187],
            snapped_coordinate: [106.602075, -6.229467]
          },
          eta: "2022-04-20T10:43:31Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["081e4dd8-fae9-4068-a33d-8272386994f7"],
          odometer: 69270,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:45:50Z",
          type: "end",
          odometer: 100859
        }
      ]
    },
    {
      vehicle: "486e0466-ec01-4550-96f6-4a817fec770f",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:19:55Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:19:55Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "02aee338-404c-44ac-9a34-3ba876df1b4f",
            "cddc537a-8835-41e6-b8ec-212549a3cacb",
            "da292b87-5f96-46fc-90b1-2227eb602034",
            "b49d8c45-d9a8-4577-90df-38bad187522e",
            "db1a92fc-77fe-44f8-a8a8-9047845104cd",
            "527d1458-ae00-4aaf-8dc6-9f05109b6fac",
            "85cbc9b9-39ab-496a-8bc3-7960dd63307f",
            "5ae3bb9a-a3f8-4302-a130-4db25d692a08",
            "6f4bc706-9df4-4bb1-ba9f-f99c72c73fb8"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "907 Parisian Landing Suite 602",
          location_metadata: {
            supplied_coordinate: [106.80233839322553, -6.269873022588552],
            snapped_coordinate: [106.8022, -6.269864]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["6f4bc706-9df4-4bb1-ba9f-f99c72c73fb8"],
          odometer: 16133,
          wait: 0
        },
        {
          location: "53008 Wilfred Mountains",
          location_metadata: {
            supplied_coordinate: [106.80210563749884, -6.278608919040205],
            snapped_coordinate: [106.802113, -6.278528]
          },
          eta: "2022-04-20T08:07:27Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["5ae3bb9a-a3f8-4302-a130-4db25d692a08"],
          odometer: 17751,
          wait: 0
        },
        {
          location: "7711 Welch Port Suite 934",
          location_metadata: {
            supplied_coordinate: [106.79920618237615, -6.314475305569867],
            snapped_coordinate: [106.799086, -6.31447]
          },
          eta: "2022-04-20T08:27:28Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["527d1458-ae00-4aaf-8dc6-9f05109b6fac"],
          odometer: 23145,
          wait: 0
        },
        {
          location: "72173 Heidenreich Land Suite 866",
          location_metadata: {
            supplied_coordinate: [106.77925622736106, -6.313118241589526],
            snapped_coordinate: [106.779229, -6.313127]
          },
          eta: "2022-04-20T08:40:15Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["85cbc9b9-39ab-496a-8bc3-7960dd63307f"],
          odometer: 25927,
          wait: 0
        },
        {
          location: "91700 Grady Heights Suite 157",
          location_metadata: {
            supplied_coordinate: [106.68727141027132, -6.309000173517688],
            snapped_coordinate: [106.687285, -6.309037]
          },
          eta: "2022-04-20T09:11:25Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["db1a92fc-77fe-44f8-a8a8-9047845104cd"],
          odometer: 45349,
          wait: 0
        },
        {
          location: "35213 Edmond Valley Apt. 355",
          location_metadata: {
            supplied_coordinate: [106.68271844843429, -6.277895644159933],
            snapped_coordinate: [106.682735, -6.277708]
          },
          eta: "2022-04-20T09:35:11Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["02aee338-404c-44ac-9a34-3ba876df1b4f"],
          odometer: 58431,
          wait: 0
        },
        {
          location: "56290 Dwayne Harbor Apt. 667",
          location_metadata: {
            supplied_coordinate: [106.7293834008575, -6.273831390263381],
            snapped_coordinate: [106.729378, -6.273781]
          },
          eta: "2022-04-20T10:06:35Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b49d8c45-d9a8-4577-90df-38bad187522e"],
          odometer: 66409,
          wait: 0
        },
        {
          location: "5326 Brendan Village Suite 781",
          location_metadata: {
            supplied_coordinate: [106.73436262294348, -6.274643298216038],
            snapped_coordinate: [106.734346, -6.27463]
          },
          eta: "2022-04-20T10:14:36Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["da292b87-5f96-46fc-90b1-2227eb602034"],
          odometer: 68158,
          wait: 0
        },
        {
          location: "349 Bayer Locks",
          location_metadata: {
            supplied_coordinate: [106.7342144985477, -6.247375504127261],
            snapped_coordinate: [106.734218, -6.247301]
          },
          eta: "2022-04-20T10:41:03Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["cddc537a-8835-41e6-b8ec-212549a3cacb"],
          odometer: 73126,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:30:22Z",
          type: "end",
          odometer: 95049
        }
      ]
    },
    {
      vehicle: "c5e5ea42-e0f7-4f61-8292-5f02ff8b58f0",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:13:56Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:13:56Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "c6367237-c001-443c-b72e-f80b4141e368",
            "2f9c135e-a82d-4428-8a91-88323b9246d8",
            "c001ace0-4ba6-431b-9030-cd2f46f262e9",
            "50b728bf-a106-4611-939f-421d212b0d2c",
            "8adc3bb2-54e4-4f1a-9d09-423280c752bd",
            "1324f96b-a638-4535-8891-3d1738d877d4",
            "bac870f8-714d-4cc4-b207-f40dc69ea886",
            "74e93a79-f867-4cef-b1d2-b4aad9a3db1f",
            "80c77c7a-5a46-4763-84fa-1fd8cd56c367",
            "f610d59a-f842-48b6-98ff-52608334dc98"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "790 Zulauf Keys Apt. 961",
          location_metadata: {
            supplied_coordinate: [106.9822530181211, -6.248169981506242],
            snapped_coordinate: [106.982267, -6.24805]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["1324f96b-a638-4535-8891-3d1738d877d4"],
          odometer: 30913,
          wait: 0
        },
        {
          location: "3782 Runte Mountains Apt. 377",
          location_metadata: {
            supplied_coordinate: [106.97796869191365, -6.229013539705836],
            snapped_coordinate: [106.978101, -6.228691]
          },
          eta: "2022-04-20T08:14:42Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["bac870f8-714d-4cc4-b207-f40dc69ea886"],
          odometer: 35818,
          wait: 0
        },
        {
          location: "691 Carole Club",
          location_metadata: {
            supplied_coordinate: [106.98778410506768, -6.2927909762903695],
            snapped_coordinate: [106.987904, -6.292595]
          },
          eta: "2022-04-20T08:39:42Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["74e93a79-f867-4cef-b1d2-b4aad9a3db1f"],
          odometer: 45727,
          wait: 0
        },
        {
          location: "254 Israel Skyway Apt. 610",
          location_metadata: {
            supplied_coordinate: [106.9870315384283, -6.309243218843838],
            snapped_coordinate: [106.987007, -6.30868]
          },
          eta: "2022-04-20T09:04:14Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["f610d59a-f842-48b6-98ff-52608334dc98"],
          odometer: 48394,
          wait: 0
        },
        {
          location: "232 Andrew Rest",
          location_metadata: {
            supplied_coordinate: [106.9755967571591, -6.304125498751676],
            snapped_coordinate: [106.975463, -6.304468]
          },
          eta: "2022-04-20T09:22:25Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["80c77c7a-5a46-4763-84fa-1fd8cd56c367"],
          odometer: 50135,
          wait: 0
        },
        {
          location: "538 Penny Camp Apt. 584",
          location_metadata: {
            supplied_coordinate: [106.95487106475292, -6.283134163966791],
            snapped_coordinate: [106.954853, -6.28313]
          },
          eta: "2022-04-20T09:46:44Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["8adc3bb2-54e4-4f1a-9d09-423280c752bd"],
          odometer: 54361,
          wait: 0
        },
        {
          location: "50135 Heathcote Junction Apt. 360",
          location_metadata: {
            supplied_coordinate: [106.92537252495458, -6.280131247247337],
            snapped_coordinate: [106.925063, -6.280688]
          },
          eta: "2022-04-20T10:07:14Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["50b728bf-a106-4611-939f-421d212b0d2c"],
          odometer: 59240,
          wait: 0
        },
        {
          location: "7045 Connelly Island Apt. 362",
          location_metadata: {
            supplied_coordinate: [106.92917287379738, -6.270720867404317],
            snapped_coordinate: [106.929163, -6.270631]
          },
          eta: "2022-04-20T10:18:25Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c001ace0-4ba6-431b-9030-cd2f46f262e9"],
          odometer: 61501,
          wait: 0
        },
        {
          location: "4826 Eva Square Suite 718",
          location_metadata: {
            supplied_coordinate: [106.91432448040212, -6.269526444848375],
            snapped_coordinate: [106.914367, -6.269317]
          },
          eta: "2022-04-20T10:28:45Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2f9c135e-a82d-4428-8a91-88323b9246d8"],
          odometer: 63613,
          wait: 0
        },
        {
          location: "7968 Hannah Orchard",
          location_metadata: {
            supplied_coordinate: [106.863605074489, -6.205677829491867],
            snapped_coordinate: [106.864057, -6.205225]
          },
          eta: "2022-04-20T10:54:20Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c6367237-c001-443c-b72e-f80b4141e368"],
          odometer: 75907,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:20:53Z",
          type: "end",
          odometer: 84340
        }
      ]
    },
    {
      vehicle: "9071d6f9-fbf0-480d-b067-26eb52c2e953",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:49:24Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:49:24Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "8af65101-12e9-4ee4-9ef1-1563c218dc38",
            "6f2851dd-a979-4007-b0f7-d75c3c7479c1",
            "c979581a-8306-4e4b-af9e-1e52d4989cba",
            "0f43243e-c693-4930-8387-52bbbe8b88e6",
            "712fb760-dab3-465f-9611-09e73589c55f",
            "ef606d31-3984-4277-bf56-449d98cc8672",
            "d050ea92-5a61-422f-86a9-ffd19d73c56f"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "990 Dianna Shores Suite 533",
          location_metadata: {
            supplied_coordinate: [106.81479658651132, -6.149493097373127],
            snapped_coordinate: [106.814787, -6.149494]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["712fb760-dab3-465f-9611-09e73589c55f"],
          odometer: 2574,
          wait: 0
        },
        {
          location: "7355 Patricia Islands Suite 630",
          location_metadata: {
            supplied_coordinate: [106.71400334265296, -6.123112827530476],
            snapped_coordinate: [106.714023, -6.123139]
          },
          eta: "2022-04-20T08:41:28Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["ef606d31-3984-4277-bf56-449d98cc8672"],
          odometer: 18554,
          wait: 0
        },
        {
          location: "8035 Kirlin Rapids Apt. 846",
          location_metadata: {
            supplied_coordinate: [106.6353910683702, -6.141112622525031],
            snapped_coordinate: [106.633416, -6.141014]
          },
          eta: "2022-04-20T09:15:51Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["d050ea92-5a61-422f-86a9-ffd19d73c56f"],
          odometer: 31630,
          wait: 0
        },
        {
          location: "64898 McKenzie Key",
          location_metadata: {
            supplied_coordinate: [106.6320181736093, -6.224981688631167],
            snapped_coordinate: [106.631751, -6.225486]
          },
          eta: "2022-04-20T09:56:11Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["0f43243e-c693-4930-8387-52bbbe8b88e6"],
          odometer: 58355,
          wait: 0
        },
        {
          location: "903 Gleason Orchard Suite 067",
          location_metadata: {
            supplied_coordinate: [106.6362601683948, -6.263644823725285],
            snapped_coordinate: [106.636839, -6.262829]
          },
          eta: "2022-04-20T10:13:54Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["c979581a-8306-4e4b-af9e-1e52d4989cba"],
          odometer: 64178,
          wait: 0
        },
        {
          location: "444 Lowe Terrace Apt. 892",
          location_metadata: {
            supplied_coordinate: [106.67174373626746, -6.237842640384366],
            snapped_coordinate: [106.671666, -6.2378]
          },
          eta: "2022-04-20T10:40:24Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["6f2851dd-a979-4007-b0f7-d75c3c7479c1"],
          odometer: 72353,
          wait: 0
        },
        {
          location: "31458 Crona Walks Apt. 867",
          location_metadata: {
            supplied_coordinate: [106.68489518908586, -6.2233271589480825],
            snapped_coordinate: [106.684906, -6.223413]
          },
          eta: "2022-04-20T10:51:46Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["8af65101-12e9-4ee4-9ef1-1563c218dc38"],
          odometer: 75003,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:38:05Z",
          type: "end",
          odometer: 95775
        }
      ]
    },
    {
      vehicle: "de96c2d8-191b-4c9d-bb20-807b5b871e0f",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:15:30Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:15:30Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "9b5502ce-0831-4103-8f7e-585c70287baa",
            "66c2483d-47d2-4b7a-82b6-3825e85a40a8",
            "1fcd932e-eba9-4530-836b-bc09be20ec65",
            "198a4adb-e983-471e-a348-25a98444e2d8",
            "dac90ef7-5a36-4883-aada-091278c8a93c",
            "71f4914a-2ad0-4106-9e05-2f8731fd3684",
            "24a0e621-448d-4138-b2b1-aa4918a89af1",
            "aa03c6cd-af78-4a6e-954b-1a854a6103f3",
            "80f39ed0-82d8-4853-9556-d6afc81fe859"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "902 Bryan Park",
          location_metadata: {
            supplied_coordinate: [106.93069188166464, -6.1706753398184],
            snapped_coordinate: [106.931058, -6.170675]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["80f39ed0-82d8-4853-9556-d6afc81fe859"],
          odometer: 16774,
          wait: 0
        },
        {
          location: "43145 Koss Street",
          location_metadata: {
            supplied_coordinate: [106.93728452726602, -6.177434877454777],
            snapped_coordinate: [106.937285, -6.177434]
          },
          eta: "2022-04-20T08:16:31Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["dac90ef7-5a36-4883-aada-091278c8a93c"],
          odometer: 19984,
          wait: 0
        },
        {
          location: "375 Darlene Cliffs",
          location_metadata: {
            supplied_coordinate: [106.9471269947555, -6.1950008788177815],
            snapped_coordinate: [106.947126, -6.195017]
          },
          eta: "2022-04-20T08:30:52Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["aa03c6cd-af78-4a6e-954b-1a854a6103f3"],
          odometer: 23881,
          wait: 0
        },
        {
          location: "50630 Flatley Ports",
          location_metadata: {
            supplied_coordinate: [106.96670515748876, -6.219584175745184],
            snapped_coordinate: [106.966587, -6.219568]
          },
          eta: "2022-04-20T08:49:01Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["24a0e621-448d-4138-b2b1-aa4918a89af1"],
          odometer: 29200,
          wait: 0
        },
        {
          location: "8506 Cruickshank Drives Suite 523",
          location_metadata: {
            supplied_coordinate: [106.97949869633312, -6.219788197775061],
            snapped_coordinate: [106.979443, -6.21984]
          },
          eta: "2022-04-20T08:56:59Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["71f4914a-2ad0-4106-9e05-2f8731fd3684"],
          odometer: 31159,
          wait: 0
        },
        {
          location: "158 Gail Hollow",
          location_metadata: {
            supplied_coordinate: [106.98245284378686, -6.169393295109497],
            snapped_coordinate: [106.982398, -6.169392]
          },
          eta: "2022-04-20T09:21:02Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["198a4adb-e983-471e-a348-25a98444e2d8"],
          odometer: 39652,
          wait: 0
        },
        {
          location: "04216 Kirk Estates Apt. 076",
          location_metadata: {
            supplied_coordinate: [106.98232967669318, -6.151185256844336],
            snapped_coordinate: [106.982424, -6.151122]
          },
          eta: "2022-04-20T09:30:21Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["1fcd932e-eba9-4530-836b-bc09be20ec65"],
          odometer: 42820,
          wait: 0
        },
        {
          location: "30480 Jill Streets Apt. 338",
          location_metadata: {
            supplied_coordinate: [106.95011814590194, -6.115278064206792],
            snapped_coordinate: [106.950289, -6.115078]
          },
          eta: "2022-04-20T10:13:59Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["9b5502ce-0831-4103-8f7e-585c70287baa"],
          odometer: 50753,
          wait: 0
        },
        {
          location: "6502 Marvin Corners Suite 513",
          location_metadata: {
            supplied_coordinate: [106.94238189685484, -6.115400039192724],
            snapped_coordinate: [106.942512, -6.115394]
          },
          eta: "2022-04-20T10:51:32Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["66c2483d-47d2-4b7a-82b6-3825e85a40a8"],
          odometer: 53051,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T11:52:16Z",
          type: "end",
          odometer: 78316
        }
      ]
    },
    {
      vehicle: "0d3628d1-d3ef-4f13-874d-a831cdc2c357",
      stops: [
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:08:50Z",
          type: "start",
          odometer: 0,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T07:08:50Z",
          type: "pickup",
          duration: 0,
          pickups: [
            "305dae56-9abc-4e3a-a685-65dbf39ca3c4",
            "5881742e-ea6a-45e1-baaf-3b14aee3427d",
            "3793dded-23a8-4bb3-8d0d-fb26bb6b4f9f",
            "a60493cd-4a79-4dd0-b41b-93f3b2a10f61",
            "b3043294-81c7-4560-876c-04941998d1ed",
            "989b9a5c-afba-4751-88da-c31c96bc0d32",
            "2bcbcaa1-862f-4483-8d2f-62828d2840c7",
            "052bfa5e-c5fe-411c-a143-218d202bc0db"
          ],
          odometer: 0,
          wait: 0
        },
        {
          location: "745 Mabel Light",
          location_metadata: {
            supplied_coordinate: [106.61869673908652, -6.2468824619862104],
            snapped_coordinate: [106.61856, -6.247071]
          },
          eta: "2022-04-20T08:00:00Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["3793dded-23a8-4bb3-8d0d-fb26bb6b4f9f"],
          odometer: 27886,
          wait: 0
        },
        {
          location: "1125 Bogan Alley Suite 248",
          location_metadata: {
            supplied_coordinate: [106.59066619837932, -6.278305382563567],
            snapped_coordinate: [106.590707, -6.278467]
          },
          eta: "2022-04-20T08:20:29Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["989b9a5c-afba-4751-88da-c31c96bc0d32"],
          odometer: 34332,
          wait: 0
        },
        {
          location: "11970 Melba Lake",
          location_metadata: {
            supplied_coordinate: [106.60546171882292, -6.298436583816494],
            snapped_coordinate: [106.606531, -6.298634]
          },
          eta: "2022-04-20T08:36:41Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["052bfa5e-c5fe-411c-a143-218d202bc0db"],
          odometer: 38865,
          wait: 0
        },
        {
          location: "054 Roland Road",
          location_metadata: {
            supplied_coordinate: [106.6195754568064, -6.301990187708432],
            snapped_coordinate: [106.619477, -6.301944]
          },
          eta: "2022-04-20T08:45:48Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["b3043294-81c7-4560-876c-04941998d1ed"],
          odometer: 40824,
          wait: 0
        },
        {
          location: "365 Johnnie Field",
          location_metadata: {
            supplied_coordinate: [106.62673636684876, -6.30245287152054],
            snapped_coordinate: [106.626794, -6.302469]
          },
          eta: "2022-04-20T08:57:59Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["a60493cd-4a79-4dd0-b41b-93f3b2a10f61"],
          odometer: 43293,
          wait: 0
        },
        {
          location: "34687 O'Reilly Mission",
          location_metadata: {
            supplied_coordinate: [106.63741432145996, -6.315294490819605],
            snapped_coordinate: [106.637512, -6.31572]
          },
          eta: "2022-04-20T09:11:33Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["5881742e-ea6a-45e1-baaf-3b14aee3427d"],
          odometer: 46936,
          wait: 0
        },
        {
          location: "1225 Schiller Mountains Suite 446",
          location_metadata: {
            supplied_coordinate: [106.64888426472676, -6.318957592240206],
            snapped_coordinate: [106.648679, -6.319004]
          },
          eta: "2022-04-20T09:28:35Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["305dae56-9abc-4e3a-a685-65dbf39ca3c4"],
          odometer: 49950,
          wait: 0
        },
        {
          location: "55826 Virginia Club",
          location_metadata: {
            supplied_coordinate: [106.65690076698546, -6.316523314213393],
            snapped_coordinate: [106.65711, -6.316984]
          },
          eta: "2022-04-20T10:48:30Z",
          type: "dropoff",
          duration: 0,
          dropoffs: ["2bcbcaa1-862f-4483-8d2f-62828d2840c7"],
          odometer: 53428,
          wait: 0
        },
        {
          location: "4060 Cornelius Springs",
          location_metadata: {
            supplied_coordinate: [106.8208698793283, -6.170176589490086],
            snapped_coordinate: [106.820842, -6.170039]
          },
          eta: "2022-04-20T12:09:33Z",
          type: "end",
          odometer: 91791
        }
      ]
    }
  ],
  version: 1
};
export const mockSolution = {
  id: "c5b0eb12-6a15-4c9d-ba0c-f2faf9aba8ff",
  solution: solution
};
export const mockSolution2 = {
  id: "c5b0eb12-6a15-4c9d-ba0c-f2faf9aba8ff",
  solution: solution2
};
