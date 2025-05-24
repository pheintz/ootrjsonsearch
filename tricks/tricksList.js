// Items
const DEKU_STICKS = "deku sticks";
const BOMBS = "bombs";
const BOMBCHU = "bombchu";
const ITEMLESS = "itemless";
const HOVER_BOOTS = "hover boots";
const HOOKSHOT = "hookshot";
const BOW = "bow";
const HAMMER = "megaton hammer";
const KOKIRI_SWORD = "kokiri sword";
const MASTER_SWORD = "master sword";

// Concepts
const WEIRDSHOT = "weirdshot";
const WEIRDSLIDE = "weirdslide";
const MEGAFLIP = "megaflip";
const GATE_CLIP = "gate clip";
const SUPERSLIDE = "superslide";
const BK_SKIP = "BK skip";
const OI = "ocarina items";
const LUNGE_STORAGE = "lunge storage";
const MEGA_SIDEHOP = "mega sidehop";
const VINE_CLIP = "vine clip";

// General Equipment
const ONEHW = "1HW";
const TWOHW = "2HW";

// Locations
const GENERAL = "General";
const DEKU_TREE = "Deku Tree";
const GORON_CITY = "Goron City";
const DODONGOS_CAVERN = "Dodongo's Cavern";
const JABUS_BELLY = "Jabu's Belly";
const ZORAS_DOMAIN = "Zora's Domain";
const ZORAS_FOUNTAIN = "Zora's Fountain";
const ICE_CAVERN = "Ice Cavern";
const GRAVEYARD = "Graveyard";
const SPIRIT_TEMPLE = "Spirit Temple";
const DESERT_COLOUSUS = "Desert Colossus";
const LAKE_HYLIA = "Lake Hylia";
const GERUDO_VALLEY = "Gerudo Valley";
const GERUDO_TRAINING_GROUNDS = "Gerudo Training Grounds";
const FOREST_TEMPLE = "Forest Temple";
const FIRE_TEMPLE = "Fire Temple";
const WATER_TEMPLE = "Water Temple";
const SHADOW_TEMPLE = "Shadow Temple";
const KOKIRI_FOREST = "Kokiri Forest";
const LOST_WOODS = "Lost Woods";
const OGC = "Outside Ganon's Castle";
const SACRED_FOREST_MEADOW = "Sacred Forest Meadow";
const DMC = "Death Mountain Crater";
const GC = "Ganon's Castle";
const BOTW = "Bottom of the Well";
const TEMPLE_OF_TIME = "Temple of Time";

// Ages
const ADULT = "adult";
const CHILD = "child";
const ANY_AGE = "any age";


window.getTricks = function getTricks() {
    return {
        "tricks": [
            {
                "name": "Ice Cavern Red Ice Bomb Push",
                "location": ICE_CAVERN,
                "description": `
                                4 frames backwalk after dropping bombs
                                turn around and backwalk
                                backflip when the camera re centers
                                `,
                "tags": [BOMBS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/dU9R5smlQfc", 
            },
            {
                "name": "King Zora Itemless Skip",
                "location": ZORAS_DOMAIN,
                "description": `
                                climb up next to the pillar
                                roll, sidehop left, roll+retarget
                                sidehop left, roll+retarget
                                backflip and without retargeting roll 3x
                                sidehop left, roll+retarget
                                roll, sidehop left x2 and hold foward
                                `,
                "tags": [ITEMLESS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/Hvq95fTEaGQ",
                
            },
            {
                "name": "qpa hover into ice cavern",
                "location": ZORAS_FOUNTAIN,
                "description": `
                                get QPA and ISG
                                Align with pillar and turn around
                                without retargeting: sidehop left, roll, roll
                                pull stick
                                frame 1: Z+R+Down
                                frame 2: Bomb+Z+R
                                keep holding Z+R
                                frame link is standing: backflip again onto railing
                                align with landing zone from on railing
                                qpa hover like before until you make it:
                                pull stick, 1 frame backflip, Unpause with  Bomb+Z+R
                                `,
                "tags": [BOMBS, BOMBCHU],
                "age": CHILD,
                "embed": "https://youtube.com/embed/Jg4vIiGzJCY",
                
            },
            {
                "name": "Skip Dampe Windmill SoT Block w/ bombs/chus",
                "location": GRAVEYARD,
                "description": `
                                align wall on right against the block
                                bombs: 1ess right
                                chus: 2ess right
                                `,
                "tags": [BOMBS, BOMBCHU],
                "age": CHILD,
                "embed": "https://youtube.com/embed/jUvkmsHJLaY",
                
            },
            {
                "name": "child clip into lake hylia from zoras domain with sticks",
                "location": ZORAS_DOMAIN,
                "description": `
                                align with wall, turn right
                                backwalk and sidehop into seam
                                retarget, roll, 2x sidehop right, backflip, jumpslash
                                turn right and retarget, swim backwards off the ledge and back up
                                `,
                "tags": [DEKU_STICKS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/Nl9dUk5E9jA",
                
            },
            {
                "name": "Chu + Hoverboots up to Spirit Temple Hand Chest",
                "location": DESERT_COLOUSUS,
                "description": `
                                get isg
                                align with wall, backflip, roll and retarget
                                roll into seam, 2x sidehop left, shield flick, roll
                                backwalk and drop bomb at bottom of the stairs
                                walk to the top of the stairs
                                backflip on 1st explosion frame you can see from off screen
                                now in the air standing:
                                equip hover boots
                                4x vertical hover (drop bomb and backflip on the same frame)
                                on the 5th, have Z unpressed buffer 2 frames after dropping the bomb then press Z to target the chu. camera will unlock
                                walk slightly up-right forward (see how link is walking in video), no input for two frames, then control stick down, you want link backwalking then retarget
                                5x vertical hovers
                                unequip hover boots
                                2x backflip target the seam and walk up
                                hookshot the chest
                                `,
                "tags": [BOMBCHU, HOVER_BOOTS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/tDZH1-jFqh4",
                
            },
            {
                "name": "Fire Temple BK Skip 0 Keys Hovers Chus",
                "location": SPIRIT_TEMPLE,
                "description": `
                                get isg
                                target wall, turn left, sidehop right
                                equip hovers
                                backflip hover 1x
                                26? vertical hovers (R+A+Backflip)
                                unequip hovers, sidehop left
                                `,
                "tags": [BOMBCHU, HOVER_BOOTS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/YkSziqIy2_k",
                
            },
            {
                "name": "Weirdshot Into Child Spirit Temple From Crates Room",
                "location": SPIRIT_TEMPLE,
                "description": `
                                see: how to weirdshot,
                                you can hookshot the torch to get in
                                `,
                "tags": [HOOKSHOT, BOMBS, WEIRDSHOT],
                "age": ADULT,
                "embed": "https://youtube.com/embed/c3FUQPX-qL8",
                
            },
            {
                "name": "Adult LH to ZD Bombchu Dive",
                "location": LAKE_HYLIA,
                "description": `
                                climb up
                                2 ess right
                                backflip
                                turn around
                                3x hold up while rolling
                                for chus: roll, backflip, shieldflick, megaflip
                                hold left in the air

                                *for bombs: shield drop bomb, roll, backflip, megaflip
                                `,
                "tags": [BOMBCHU],
                "age": ADULT,
                "embed": "https://youtube.com/embed/G6XVwXbBo8s",
            },
            {
                "name": "Hookshot Jump Tree Skultulla Lake Hylia",
                "location": LAKE_HYLIA,
                "description": `
                                have hookshot in hand
                                target tree
                                hold angle and roll into corner
                                backflip, sidehop right, sidehop left, roll without retargeting
                                bonk tree and mash hookshot
                                if you want to buffer:
                                frame of red dot showing: press hookshot button
                                release one frame later
                                `,
                "tags": [HOOKSHOT],
                "age": ADULT,
                "embed": "https://youtube.com/embed/x_wv4TWVpEs",
            },
            {
                "name": "Enter Water Temple As Child w Sticks",
                "location": LAKE_HYLIA,
                "description": `
                                hold z until you hit the water at the very bottom
                                1 sidehop left, 4 backflips,
                                downroll (roll without retarget)
                                hold left the entire time for the roll

                                check for the frame where link pops up and pull stick and jumpslash as soon as stick is out.

                                keep holding Z and Left and you'll fall off, and keep holding Z and Left until:

                                watch the top of the screen where the angle of the water texture changes (there's a 'peak'). the first frame that corner goes off screen switch to holding Z and Right and hold until you hit the water

                                swim
                                `,
                "tags": [DEKU_STICKS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/rXNEoKCei-Y",
            },
            {
                "name": "Water Temple BK Skip Bombchu",
                "location": WATER_TEMPLE,
                "description": `
                                get isg
                                face the right pillar
                                turn right, sidehop right, turn right
                                sidehop right, on 2nd frame of sidehop shielddrop chu (keep holding Z+R)
                                on the frame link touches the ground, Z+R+Backflip
                                on the frame link 'freezes' in the air (shield will rotate left a bit) release all inputs
                                once upright, shield drop chu (Z+R+Bombchu)
                                3 frames later hold shield and backflip
                                shield drop chu on 8th red, swing/unsheath on 1st explosion frame
                                `,
                "tags": [BOMBCHU, BK_SKIP],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/pHanWnYieYc",
                
            },
            {
                "name": "Spirit Temple BK Skip Bombchu",
                "location": SPIRIT_TEMPLE,
                "description": `
                                Get ISG off boss door, face the center lock,
                                turn right, sidehop right, turn left,
                                hold target and shield drop a bombchu on the 9th red
                                release target and shield and hold down
                                when link is facing the camera (2 frames), release down and hold target and shield
                                (keep Z+R) when camera has centered behind link (4 frames), backflip out of the unpause
                                when link’s legs are sticking up, release target and shield
                                once upright, shield drop a chu (Z+R+Bombchu)
                                3 frames later hold shield and backflip,
                                refocus camera, shield drop chu on 8th red, swing/unsheath on 1st explosion frame
                                `,
                "tags": [BOMBCHU, BK_SKIP],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/HdzPVbpwoEI",
                
            },
            {
                "name": "Child Shadow Temple Gate Clip",
                "location": SHADOW_TEMPLE,
                "description": `
                                (see video) get into corner in pit and align
                                turn around,  2 ess left, backflip, shield scoot
                                if you want to buffer shield scoot it's 3 frames unshielded
                                turn right, 2x jumpslash
                                `,
                "tags": [DEKU_STICKS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/tFbHGK8Wl6c",
                
            },
            {
                "name": "Child Water Temple Entry Superslide",
                "location": LAKE_HYLIA,
                "description": `
                                Align as shown.
                                Legs between blade of grass, glitch tick on the brick line
                                1 Roll, turn right
                                Chu on 8th black
                                frames
                                1 Z+R
                                2-4 right on stick
                                5 right+A
                                6.... Z+R+Mash A
                                When links head is below the bush release R
                                Swim under bushes turn right and realign camera
                                10 swims (without B) just left of the left pillar
                                A and dive up+right

                                note: won't work if you have any strength upgrades
                `,
                "tags": [BOMBCHU, SUPERSLIDE],
                "age": CHILD,
                "embed": "https://youtube.com/embed/_1fHdyn595U",
                
            },
            {
                "name": "Enter Jabu As Adult w/ Bombchu",
                "location": ZORAS_FOUNTAIN,
                "description": `
                                get isg
                                get into corner
                                2x backflip, roll + retarget
                                left sidehop, roll + retarget
                                right sidehop, no retarget + roll
                                walk forward (up notch) until link stops at the ledge

                                9th red out of pause: Z+R+A+Right, let go of right until landing
                                hold, not quite up-right notch, up a little more, X value in the 30s (see note)

                                while holding angle, on 8th black chu: R+Right out of unpause and hold the inputs
                                buffer 4 frames (on 4th frame links shield moves to the right)
                                On 4th frame: R+A with no stick input.

                                During the roll: keep holding R. watch for explosion frame 
                                1st frame: you will see the hilt of link's sword clearly sticking out
                                2nd frame: bigger explosion, hilt no longer visible
                                On this frame: Z+R+A+Left and unpause and let link go

                                note: (ship setting on input viewer: analog angle values or dev tools: value viewer)
                `,
                "tags": [BOMBCHU],
                "age": ADULT,
                "embed": "https://youtube.com/embed/xDLnTnV9UcY",
                
            },
            {
                "name": "Child Statue Climb From Child Side",
                "location": SPIRIT_TEMPLE,
                "description": `
                    Ailgn with wall, ess left, backflip, roll retarget for angle, roll into corner
                    with z held 4x backflip, roll, 2x left sidehop, roll, left sidehop, roll and release z
                    with z held 4x left sidehop, roll, left sidehop
                    retarget, roll, left sidehop
                    retarget, roll, 1ess right

                    hold z the rest of the time 
                    roll, up+roll
                    hold up until the frame where link is obviously coming down (frame after link's foot is parallel with the ground)
                    from unpause, pull stick and hold left until frame where links stick is pointing forward 
                    if you're paused on that frame jumpslash out of the unpause with no control stick inputs`,
                "tags": [DEKU_STICKS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/TiTWNFPGImA",
                
            },
            {
                "name": "Bomb QPA Hover Into Forest",
                "location": SACRED_FOREST_MEADOW,
                "description": `get QPA and ISG (see: "Adult Stick Nut QPA"))
                                get into corner
                                3 sidehop left and roll with target held
                                turn right. 4 sidehops right, turn left, 2 ess left
                                9 bomb hovers, backflip, jump to main ledge
                `,
                "tags": [BOMBS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/mZ41KgN2TF8",
                
            },
            {
                "name": "Adult Stick Nut QPA (Quick Putaway)",
                "location": GENERAL,
                "description": `target wall
                                backflip sidehop right
                                roll+retarget, 2ess right
                                walk left against wall
                                frame 1: put away
                                frame 2: deku nut
                                jumpslash
                                if your stick breaks you have glitched damage value
                `,
                "tags": [DEKU_STICKS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/C5gYslOuxlU",
                
            },
            {
                "name": "GTG Gate Clip Bombs",
                "location": GERUDO_TRAINING_GROUNDS,
                "description": `go into corner. A drop bomb get on fence and climb sideways one over into the corner
                                to clip right: hold right on big red
                                to clip left: hold left on first explosion frame
                `,
                "tags": [BOMBS, GATE_CLIP],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/k-oAPiO8mPM",
                
            },
            {
                "name": "Distance Megaflip Gerudo Valley",
                "location": GERUDO_VALLEY,
                "description": `
                            align on pillar black line
                            left sidehop, shield flick, right sidehop
                            backflip, roll, bonk (Z+Roll+Hold Up)
                            left sidehop, roll+retarget
                            left sidehop, roll+retarget
                            2x backflip, sidehop right
                            bomb, roll, backflip
                            roll on big red

                            for distance megaflip:
                            1st frame when link has shield out: Z+R+Down
                            2nd frame link has shield out, backflip: Z+R+Down+A
                `,
                "tags": [BOMBS],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/sdOLkSfFevY",
            },
            {
                "name": "Bombs or Bombchu Clip Into Gerudo Valley Boulder Grotto",
                "location": GERUDO_VALLEY,
                "description": `
                            For the angle: after turning around, use the top of the ridge where the angle changes.

                            chus: 3 rolls and megaflip
                            bombs: 4 rolls, bomb, shield drop, roll, backflip, megaflip
                `,
                "tags": [BOMBS, BOMBCHU],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/nxLp15RctiQ",
            },
            {
                "name": "Gerudo Valley Cucko Jump w/ Sticks",
                "location": GERUDO_VALLEY,
                "description": `
                                remove bunny hood
                                get quickdraw (cancel draw stick animation while falling in water)
                                align with wall, turn left and backwalk all the way
                                throw cucko, turn around and re center camera and pause
                                to keep from speaking to guard pause is required
                                backflip out of the pause, then backflip again out of another pause
                                shield flick, roll, let go of Z and pick up the cucko
                                Z and release if you need to again to ess turn right
                                hold Z, 5 frames backwalk, on the 5th unpause let go of all inputs
                                once you come to a stop, one frame up and then hold left
                                when link is no longer visible
                                1 frame stick pull due to quickdraw
                                1 frame no inputs
                                1 frame stick jumpslash
                    `,
                "tags": [DEKU_STICKS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/OSGjX3cGAEU",

            },
            {
                "name": "Deku Adult BK (231) Skip",
                "location": DEKU_TREE,
                "description": `
                    Align with wall, turn around,
                    hold z forever:
                    hop to corner, 2x left sidehop, backflip, walk forward max speed.
                    A to drop then pull stick+jumpslash on 4th frame or sword immediately.`,
                "tags": [TWOHW, ONEHW, BK_SKIP],
                "age": ADULT,
                "embed": "https://www.youtube.com/embed/4jmnz6FM3kU",
                
            },
            {
                "name": "Bombchu Hover to Deku Basement GS",
                "location": DEKU_TREE,
                "description": `
                    get jumpslash storage to 1 shot the GS
                    get isg

                    align with wall
                    ess left, sidehop left, ess left
                    sidehop left and right again quickly to avoid z targeting the big skultulla
                    shield drop chu on 2nd frame of sidehop,
                    backflip immedately on landing
                    shield drop 2nd chu immediately when upright and backflip

                    z target the big skultulla to unlock angle
                    let go of z and turn and put your back to the skultulla
                    Z+R+Backflip, wait a second and backflip again
                    GS should die automatically and backflip if needed to collect the token`,
                "tags": [BOMBCHU],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/QUHP5JwA__I",
            },
            {
                "name": "Enter Closed Deku As Adult",
                "location": KOKIRI_FOREST,
                "description": "",
                "tags": [HOVER_BOOTS, BOMBS],
                "age": ADULT,
                "embed": "https://www.youtube.com/shorts/L6R4GkOsHYM",
            },
            {
                "name": "Deku Tree B1 Skip",
                "location": DEKU_TREE,
                "description": "",
                "tags": [ITEMLESS],
                "age": CHILD,
                "embed": "https://www.youtube.com/shorts/TEAxY97Y0c0",
            },
            {
                "name": "Dodongo Eyes Early Boss Bombchu",
                "location": DODONGOS_CAVERN,
                "description": `
                                get into corner
                                backflip, roll, turn left
                                for 1st eye shield drop instantly
                                2nd eye shield drop around 2nd red`,
                "tags": [BOMBCHU],
                "age": ANY_AGE,
                "embed": "",
            },
            {
                "name": "Jabu Blue Switch Child Skip",
                "location": JABUS_BELLY,
                "description": "",
                "tags": [DEKU_STICKS],
                "age": CHILD,
                "embed": "https://www.youtube.com/shorts/cUw1sdlqUFA",
                
            },
            {
                "name": "Jabu Blue Switch Adult Skip",
                "location": JABUS_BELLY,
                "description": `frame to open door is first frame link's hand is off the ground, leaning left
                                no need to hold z at any point
                                buffer A-button on the final unpause`,
                "tags": [ITEMLESS],
                "age": ADULT,
                "embed": "https://www.youtube.com/embed/G9cNyW5K8Vc",
                
            },
            {
                "name": "Megaflip w/ bombs to Jabu Switch",
                "location": JABUS_BELLY,
                "description": `Roll, backflip, shieldflick/retarget
                                On big red -
                                Frame 0: A+Z+R
                                Frame 1: Z+R+Hold down the entire rest of the way
                                On the 2nd frame that link is entirely inside the explosion: A+Z+R+Down`,
                "tags": [BOMBS, MEGAFLIP],
                "age": ANY_AGE,
                "embed": "https://www.youtube.com/embed/T7A5vm4iXJw",
                
            },
            {
                "name": "Lost Woods Aqua Escape",
                "location": LOST_WOODS,
                "description": "Target around texture shown, 1 ess right, Sidehop left, Backflip, (Slash stick and sidehop)for position, time jumpslash to clip",
                "tags": [ONEHW, TWOHW],
                "age": CHILD,
                "embed": "https://www.youtube.com/embed/D3RSZ1WyB5A",
            },
            {
                "name": "Child Forest Temple BK Skip bombchu",
                "location": FOREST_TEMPLE,
                "description": "hold z the whole time: one frame a+down, one frame down on control stick, one frame shield (hold the rest of the way), one frame chu pull,  z+r+up the rest of the way",
                "tags": [BOMBCHU, BK_SKIP, VINE_CLIP],
                "age": CHILD,
                "embed": "https://youtube.com/embed/f0l6W0blyUw",
                
            },
            {
                "name": "Forest Temple Mega Backflip to Scarecrow",
                "location": FOREST_TEMPLE,
                "description": `get in corner next to switch, 
                                turn around and walk forward to climb up railing
                                turn right and sidestep until links right heel is touching the railing
                                c-up to line up backflip landing zone
                                turn around and megaflip`,
                "tags": [BOMBCHU, MEGAFLIP],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/dVfhIBN8Q7E",
                
            },
            {
                "name": "Skip First Key in Forest Temple",
                "location": FOREST_TEMPLE,
                "description": "",
                "tags": [BOMBCHU, HOVER_BOOTS],
                "age": ADULT,
                "embed": "https://youtube.com/shorts/MqgM5zs8Xdc",
            },
            {
                "name": "Forest Temple First Green Block Skip",
                "location": FOREST_TEMPLE,
                "description": "sidehop, roll, get into corner, crouchstab 2x, jumpslash",
                "tags": [ONEHW, TWOHW],
                "age": ADULT,
                "embed": "https://youtube.com/embed/xqUVH-3T9Nw",
                
            },
            {
                "name": "Forest Temple Block Room to Courtyard",
                "location": FOREST_TEMPLE,
                "description": "Align glitch tick w/ texture shown and jumpslash",
                "tags": [ONEHW, TWOHW],
                "age": ADULT,
                "embed": "https://youtube.com/embed/KW9U3UyDZr4",
                
            },
            {
                "name": "Weirdshot Fire Temple BK Chest",
                "location": FIRE_TEMPLE,
                "description": `see: "How To Weirdshot"
                `,
                "tags": [HOOKSHOT, WEIRDSHOT],
                "age": ADULT,
                "embed": "https://www.youtube.com/embed/IPpPgkgMnPw",
                
            },
            {
                "name": "Child Statue Climb",
                "location": SPIRIT_TEMPLE,
                "description": `Get ISG. align facing the head on the shoulder, turn left
                z, take a few side steps down to drop bomb. get back up
                backflip on big blue.
                shield drop+2nd backflip on second exhale (watch link's feet or bottom of tunic movement)
                *make sure weapon is out* side hop up, 3 sidehops left and hold up+jumpslash and shield the landing.
                (see video, but a few frames worked for me for the jumpslash)
                get link's head in the wall as much as you can, then backflip
                `,
                "tags": [BOMBS],
                "age": CHILD,
                "embed": "https://www.youtube.com/embed/9llUpjaAUrI",
                
            },
            {
                "name": "Spirit/Water Temple Bombs BK Skip",
                "location": SPIRIT_TEMPLE,
                "description": `Get ISG on door. Z target door. (drop as fast as you can) Shield drop sidehop shield drop. Backflip on big blue then backflip again. Pull bomb and press a to drop. If 2handed weapon pull out. On big red either unsheath or swing your two hander.`,
                "tags": [BOMBS, BK_SKIP, WATER_TEMPLE],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/GJOHtcVqUQg",
                
            },
            {
                "name": "Child Skip King Zora Deku Sticks",
                "location": ZORAS_DOMAIN,
                "description": `Z target right wall on staircase
                            sidehop left, roll and retarget, 1 ess left, hold angle
                            from corner(see video) 2x sidehop right, backflip, sidehop left
                            when stick starts burning out, hold left and walk off the edge
                            jumpslash on first frame the top link's head is below the ledge
                `,
                "tags": [DEKU_STICKS],
                "age": ANY_AGE,
                "embed": "https://www.youtube.com/embed/kqV5v6fUIuk",
                
            },
            {
                "name": "Shadow Temple No Hovers to Boss Door",
                "location": SHADOW_TEMPLE,
                "description": `from entrance:
                                z target door and turn around
                                run straight forward and jump to platform
                                when land turn around and backwalk off the edge
                                pull yourself back up, ess/shieldturn right run forward and grab next ledge
                                climb up and turn left. megaflip to land on the next platform.
                                ess/shieldturn right and backwalk off the ledge
                                climb up and turn right. run forward and jump forward and slightly to the right
                                Roll foward and target until you align with the boss door
                `,
                "tags": [BOMBCHU, BK_SKIP],
                "age": ANY_AGE,
                "embed": "https://youtube.com/embed/G8ASlsOYLak",
                
            },
            {
                "name": "Shadow Temple Gate Clip to Boat",
                "location": SHADOW_TEMPLE,
                "description": `from corner:
                                target wall 
                                3 sidehop left,
                                2x vertical slash cancel with shield,
                                1 vertical slash no cancel,
                                2x jumpslash
                `,
                "tags": [MASTER_SWORD],
                "age": ADULT,
                "embed": "https://youtube.com/embed/buUV_5gnukM",
                
            },
            {
                "name": "Shadow Temple BK Skip",
                "location": SHADOW_TEMPLE,
                "description": `Backwalk off edge on 3rd blue
                                hold up to climb up immediately.
                                hold left during climbing animation.
                                You can start pause buffering once link has turned left.
                                On frame once links feet are separated (see video) hold down left and buffer one frame.
                                keep holding down-left and roll
                                press z on ledge clip frame.
                `,
                "tags": [BOMBCHU, BK_SKIP],
                "age": ADULT,
                "embed": "https://youtube.com/embed/VOgoEvUMNBI",
                
            },
            {
                "name": "Setup for Boatkey",
                "location": SHADOW_TEMPLE,
                "description": `in hoverboots room get into back right corner
                                2 left sidehop
                                backflip
                                shield/ess turn right
                                roll forward, backflip
                                3ess right
                                megabackflip
                `,
                "tags": [BOMBCHU, BK_SKIP],
                "age": ADULT,
                "embed": "https://youtube.com/embed/EIBctPHYEvE",
                
            },
            {
                "name": "OGC Fairy Strength Block Skip",
                "location": OGC,
                "description": `Get into corner, turn right, 
                                DONT let that extra camera click happen when turning right
                                1 ess right for bomb
                                2 for chu
                `,
                "tags": [BOMBCHU, BOMBS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/CN0MsBqPfFM",
                
            },
            {
                "name": "DDC Backflip OI Push Block Skip",
                "location": DODONGOS_CAVERN,
                "description": `get bottle out for OI
                                backwalk down from door on the right wall
                                drop down and target the wall where you dropped
                                z+downroll retarget for angle
                                2 sidehop left
                                3 sidehop right
                                backflip OI. cancel ocarina after some time
                                door seems to stay open longer if you wait a bit
                                door will eventually close so you have to go
                `,
                "tags": [BOMBCHU, BOMBS, OI],
                "age": ADULT,
                "embed": "https://youtube.com/embed/CN0MsBqPfFM",
                
            },
            {
                "name": "Volvagia Quick Kill Weirdshot w/ Bow",
                "location": FIRE_TEMPLE,
                "description": `see: "How To Weirdshot"
                `,
                "tags": [BOW, HAMMER, WEIRDSHOT],
                "age": ADULT,
                "embed": "https://youtube.com/embed/9zBMVo0dgEs",
                
            },
            {
                "name": "HESS Clip Into Child Side As Adult Spirit Temple",
                "location": SPIRIT_TEMPLE,
                "description": `break the pots because they will mess up your slide

                                from between the pillars:
                                shield drop bomb, sidehop left shield, drop bomb
                                backflip, shield flick, roll
                                hold Z+R
                                wait for big blue, buffer in your roll then mash A
                                equip hover boots
                                from the corner: hold left on stick, 1 frame release R, 1 frame re-hold R
                                once you stop in the tunnel start running immediately or you'll fall
                `,
                "tags": [HOVER_BOOTS, BOMBS, SUPERSLIDE],
                "age": ADULT,
                "embed": "https://youtube.com/embed/9zBMVo0dgEs",
                
            },
            {
                "name": "Pot Push Into DMC From Goron City",
                "location": GORON_CITY,
                "description": `
                                target wall, turn right, backwalk into corner and come to a stop
                                7 frames walking forward, let go of control stick and come to a stop
                                7 frames backwalk, out of the unpause Z+R+Down
                `,
                "tags": [ITEMLESS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/un_s31uOhlM",
            },
            {
                "name": "Clip into DMC from Goron City Chus",
                "location": GORON_CITY,
                "description": `
                                Target wall behind torch
                                turn left
                                roll into corner
                                with Z: backflip, roll
                                Shield drop chu on 8th red
                                R+Z+Roll on black chu to the right
                `,
                "tags": [BOMBCHU],
                "age": CHILD,
                "embed": "https://youtube.com/embed/yZcLZ4H6biY",
            },
            {
                "name": "Clip into DMC from Goron City Bombs",
                "location": GORON_CITY,
                "description": `
                                Target wall behind torch
                                turn left
                                roll into corner
                                shield drop bomb
                                with Z: backflip, roll
                                R+Z+Roll on explosion frame
                                R+Z+down on control stick for the rest
                `,
                "tags": [BOMBS],
                "age": CHILD,
                "embed": "https://youtube.com/embed/BGQS_VSnrtw",
            },
            {
                "name": "Bombs Mega Sidehop Into Darunia's Room",
                "location": GORON_CITY,
                "description": `Target wall, turn right, sidehop, roll and retarget.
                                Press forward to move along fence for angle.
                                Turn around, Roll 2x, shield drop, roll, backflip, z+r+roll on big blue
                                hold down the whole time
                                sidehop 2nd frame link is in the explosion
                `,
                "tags": [BOMBS, MEGA_SIDEHOP],
                "age": CHILD,
                "embed": "https://youtube.com/embed/THbUU1wWTsE",
                
            },
            {
                "name": "Bombchu Mega Sidehop Into Darunia's Room",
                "location": GORON_CITY,
                "description": `
                    target wall, turn right, sidehop right, roll + retarget
                    hold angle and walk forward and let fence push you
                    turn around at the edge and do one roll
                    pull chu, shield drop and roll on 10th red
                    hold right during the roll
                    sidehop on 4th explosion frame (where link is upright)
                `,
                "tags": [BOMBCHU, MEGA_SIDEHOP],
                "age": CHILD,
                "embed": "https://youtube.com/embed/ElAAh5NIZk8",
            },
            {
                "name": "How To Weirdshot",
                "location": GENERAL,
                "description": `z target wall
                                bonk wall
                                quick shield drop bomb
                                backflip
                                pull hookshot or bow and cancel with shield
                                Buffer in Z+R roll on big blue, big red, or first explosion frame
                                hold down during the roll
                                damage frame: it looks like link is getting pushed back and you'll see hook or bow in hand

                                from unpause here frames:
                                1 Z+R+Down
                                2 Z+R+Down
                                3 Z+R+Down
                                4 Z+R+Down
                                5 Z+Down*  Should see link move forward on this frame. If he moves backwards most likely you're not holding exactly down on control stick even a few degrees will mess it up.
                                6 *Release down* Z+Bow

                                Let go of Z and unpause when fully underground

                                for weirdslide never let go of Z
                `,
                "tags": [BOW, HOOKSHOT, WEIRDSHOT],
                "age": ADULT,
                "embed": "https://youtube.com/embed/IvQk6G__f2Q",
                
            },
            {
                "name": "Bottom of the Well Actor Deload",
                "location": BOTW,
                "description": `open the door as fast as possible after exiting crawlspace
                                you should come out of the door into the same room you entered from
                                go back through the crawlspace you came from
                                water will be deloaded and you can go crawl to deadhand room
                `,
                "tags": [ITEMLESS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/Y9DnpdHWLhs",
            },
            {
                "name": "Vine Clip to Deadhand",
                "location": BOTW,
                "description": `
                                frames for clip to get as deep in the water as possible:

                                feet above the brick line (2 climbs up after grabbing the wall)
                                hold Z the whole time:
                                frame 1: A + Z
                                frame 2: Down + Z
                                frame 3: Z
                                frame 4: Z
                                frame 5: Z + Bombchu
                                frame 6 and on: Z + R + UP

                                there's not a lot of time for:
                                Up-leftish and retarget in the water
                                swim under the track
                                up-right out of the water and jumpslash towards the corner of the room
                `,
                "tags": [ITEMLESS],
                "age": ADULT,
                "embed": "https://youtube.com/embed/SGmPuPiSFLo",
            },
            {
                "name": "DMC Fairy Boulder Skip w/ Bombchu",
                "location": DMC,
                "description": `target wall turn left shield drop chu while backwalking
                `,
                "tags": [BOMBCHU],
                "age": CHILD,
                "embed": "https://youtube.com/embed/OrFZVADl1O8",
                
            },
            {
                "name": "DMC Weirdslide Into Boulder Grotto",
                "location": DMC,
                "description": `target wall and roll into corner
                                backflip, sidehop left, backflip, sidehop left
                                drop bomb and backflip don't let go of z,
                                roll, roll, shieldcancel hookshot or bow
                                do weirdshot but never let go of Z.
                                see: "how to weirdshot"
                `,
                "tags": [BOMBS, HOOKSHOT, BOW, WEIRDSHOT, WEIRDSLIDE],
                "age": ADULT,
                "embed": "https://youtube.com/embed/UtxxHi8Ox0s",
                
            },
            {
                "name": "Child Light Trial Block Skip",
                "location": GC,
                "description": `
                `,
                "tags": [BOMBCHU],
                "age": CHILD,
                "embed": "https://clips.twitch.tv/embed?clip=FrigidDepressedTitanDoritosChip-yMZMygiNziiIz4e2",
            },
            {
                "name": "Skip Ganon Trials Bombchu",
                "location": GC,
                "description": `
                                get isg, line up roughly with the water trial door, turn around and go to the wall
                                turn right, sidehop right, turn right
                                sidehop left, on 2nd frame of sidehop shielddrop chu (keep holding Z+R)
                                on the frame link touches the ground, Z+R+Backflip
                                on the frame link 'freezes' in the air (shield will rotate left a bit) release all inputs
                                once upright, shield drop chu (Z+R+Bombchu)
                                3 frames later hold shield and backflip
                                backflip again
                `,
                "tags": [BOMBCHU],
                "age": ADULT,
                "embed": "https://youtube.com/embed/rXESrlG7nE4",
            },
            {
                "name": "Door of Time Skip w/ Lunge Storage",
                "location": TEMPLE_OF_TIME,
                "description": `inputs for lunge storage:
                                crouch stab
                                Z+A+R (jumpslash with shield landing)
                                let go of everything
                                (input out of unpause or on the same frame) UP + B

                                inputs for skip:
                                go to door, sidehop left, roll+retarget for angle
                                roll into corner.
                                while holding z. sidehop right, roll, sidehop right, sidehop left
                                b+r unsheath, 1ess right, jumpslash
                `,
                "tags": [KOKIRI_SWORD, LUNGE_STORAGE],
                "age": CHILD,
                "embed": "https://www.youtube.com/embed/XV1Bdq0MXNQ",
            },
        ]
    };
}
