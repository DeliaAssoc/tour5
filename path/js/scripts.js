///////////////////////////////////////////////////////////
//////////////////// DEFINE ANIMATIONS ////////////////////
///////////////////////////////////////////////////////////
        

var anim_p1_s3,
    anim_p1_s4,
    anim_p1_s5,
    anim_p1_s6,
    anim_p1_s7,
    anim_p1_s8,
    anim_p1_s9_1,
    anim_p1_s9_2,
    anim_p1_s10,
    anim_p2_s1,
    anim_p2_s2,
    anim_p2_s3,
    anim_p2_s4,
    anim_p2_s5






////////////////////////////////////////////////////////
//////////// DESTROY ANIMATIONS SELECTION //////////////
////////////////////////////////////////////////////////


function init_anim(selector, data) {
  bodymovin.destroy( anim_p1_s3 );
  bodymovin.destroy( anim_p1_s4 );
  bodymovin.destroy( anim_p1_s5 );
  bodymovin.destroy( anim_p1_s6 );
  bodymovin.destroy( anim_p1_s7 );
  bodymovin.destroy( anim_p1_s8 );
  bodymovin.destroy( anim_p1_s9_1 );
  bodymovin.destroy( anim_p1_s9_2 );
  bodymovin.destroy( anim_p1_s10 );
  bodymovin.destroy( anim_p2_s1 );
  bodymovin.destroy( anim_p2_s2 );
  bodymovin.destroy( anim_p2_s3 );
  bodymovin.destroy( anim_p2_s4 );
  bodymovin.destroy( anim_p2_s5 );


  
  var animData = {
    wrapper: document.getElementById(selector),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: false,
    path: data
  };
  return bodymovin.loadAnimation(animData);
};






////////////////////////////////////////////////////////
//////////////////// PATH SELECTION ////////////////////
////////////////////////////////////////////////////////


$(document).ready(function() {

  //Check which path
  $(document).on('click', '.do-path-start', function() {
    var path = $('input[name=pathSelect]:checked').val();
    //If Care Team Path is selected
    
    if (path == 'team') {
      //PATH 01
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 01
      $('#path_01').toggleClass('inactive active');

      // Call animation
      anim_p01s01();

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

    } else if (path == 'patient') { 
    //If Care Plan Path is selected
      //PATH 02
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 02
      $('#path_02').toggleClass('inactive active');

      // Call animation
      anim_p02s01();

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

    } else {
      $( '.please-select' ).toggleClass( 'inactive active' );;
    }
  });






////////////////////////////////////////////////////////
//////////////// ANIMATION FUNCTIONS ///////////////////
////////////////////////////////////////////////////////


//////////  PATH 01  //////////



// Slide 1
function anim_p01s01()
{
  // Initialize animation
  // No animation for this slide

  //Activate animation and tooltip
  $( '#anim_p01s01' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s01' ).toggleClass( 'inactive active' );
  }, 750 );
};


// Slide 2
function anim_p01s02()
{
  // Initialize animation
  // No animation for this slide

  //Activate animation and tooltip
  $( '#anim_p01s02' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s02' ).toggleClass( 'inactive active' );
  }, 750 );
};


// Slide 3
function anim_p01s03_1( prev )
{
  // Check to see if click is from previous link
  if ( prev != null ) {

  } else {
      $( '#anim_p01s03' ).toggleClass( 'inactive active' );
  }

  // Initialize animation
  anim_p1_s3 = init_anim( 'anim_p01s03', '../bodymovin/p01s03/data.json' );

  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s03-1' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Open animation and stop on frame 1
  anim_p1_s3.addEventListener( 'data_ready', function(){
    anim_p1_s3.goToAndStop( 1, true );
  }, false);
  // Start animation after 1500ms
  setTimeout( function(){
    anim_p1_s3.play();
    anim_p1_s3.addEventListener( 'loopComplete', function(){
      anim_p1_s3.goToAndStop( 85, true );
    });
  }, 1500);

};

function anim_p01s03_2( prev )
{
  // Initialize animation
  // Check to see if click is from previous link
  if ( prev != null ) {
    anim_p1_s3 = init_anim( 'anim_p01s03', '../bodymovin/p01s03/data.json' );
    $( '#anim_p01s03' ).toggleClass( 'inactive active' );
  } else {

  }

  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s03-2' ).toggleClass( 'inactive active' );
  }, 750 );

};


// Slide 4
function anim_p01s04_1( prev )
{ 
  // Initialize animation
  // Check to see if click is from previous link
  if ( prev != null ) {
    // Stop anination
    anim_p1_s4.stop();
  } else {
    $( '#anim_p01s04' ).toggleClass( 'inactive active' );
  }
  anim_p1_s4 = init_anim( 'anim_p01s04', '../bodymovin/p01s04/data.json' );

  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s04-1' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Open animation and stop on frame 1
  anim_p1_s4.addEventListener( 'data_ready', function(){
    anim_p1_s4.goToAndStop( 1, true );
  }, false);

};

function anim_p01s04_2()
{
  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s04-2' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Start animation after 1500ms
  setTimeout( function(){
    anim_p1_s4.play();
    anim_p1_s4.addEventListener( 'loopComplete', function(){
      anim_p1_s4.stop();
    });
  }, 1500);

};

function anim_p01s04_3()
{
  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s04-3' ).toggleClass( 'inactive active' );
  }, 750 );

  // Stop previous animation
  anim_p1_s4.stop();

};

function anim_p01s04_4()
{
  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s04-4' ).toggleClass( 'inactive active' );
  }, 750 );

};

function anim_p01s04_5()
{
  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p01s04-5' ).toggleClass( 'inactive active' );
  }, 750 );

};

function anim_p01s04_6( prev )
{
  //Activate animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p01s04' ).toggleClass( 'inactive active' );

    // Initialize animation
    anim_p1_s4 = init_anim( 'anim_p01s04', '../bodymovin/p01s04/data.json' );
    // Trigger animation
    // Open animation and stop on frame 1
    anim_p1_s4.addEventListener( 'data_ready', function(){
      anim_p1_s4.goToAndStop( 1, true );
    }, false);
  } else {
    
  }
  setTimeout( function() {
    $( '#tip_p01s04-6' ).toggleClass( 'inactive active' );
  }, 750 );

};


// Slide 5
function anim_p01s05()
{
  //Activate animation and tooltip
  $( '#anim_p01s05' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s05' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};


// Slide 6
function anim_p01s06()
{
    // Initialize animation
  anim_p1_s6 = init_anim( 'anim_p01s06', '../bodymovin/p01s06/data.json' );

  //Activate animation and tooltip
  $( '#anim_p01s06' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s06' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Open animation and stop on frame 1
  anim_p1_s6.addEventListener( 'data_ready', function(){
    anim_p1_s6.goToAndStop( 1, true );
  }, false);
  // Start animation after 1500ms
  setTimeout( function(){
    anim_p1_s6.play();
    anim_p1_s6.addEventListener( 'loopComplete', function(){
      anim_p1_s6.goToAndStop( 159, true );
    });
  }, 1500);
};


// Slide 7
function anim_p01s07()
{
  // Initialize animation
  anim_p1_s7 = init_anim( 'anim_p01s07', '../bodymovin/p01s07/data.json' );

  //Activate animation and tooltip
  $( '#anim_p01s07' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s07' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Open animation and stop on frame 1
  anim_p1_s7.addEventListener( 'data_ready', function(){
    anim_p1_s7.goToAndStop( 1, true );
  }, false);
  // Start animation after 1500ms
  setTimeout( function(){
    anim_p1_s7.play();
    anim_p1_s7.addEventListener( 'loopComplete', function(){
      anim_p1_s7.goToAndStop( 157, true );
    });
  }, 1500);
};


// Slide 8
function anim_p01s08()
{

  //Activate animation and tooltip
  $( '#anim_p01s08' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s08' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};


// Slide 9
function anim_p01s09_1()
{
  //Activate animation and tooltip
  $( '#anim_p01s09-1' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s09-1' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};

function anim_p01s09_2()
{
  //Activate animation and tooltip
  $( '#anim_p01s09-2' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s09-2' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};


// Slide 9
function anim_p01s10()
{
  //Activate animation and tooltip
  $( '#anim_p01s10' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s10' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};





//////////  PATH 02  //////////

// Slide 1
function anim_p02s01()
{
  // Initialize animation
  // No animation for this slide

  //Activate animation and tooltip
  $( '#anim_p02s01' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p02s01' ).toggleClass( 'inactive active' );
  }, 750 );
};


// Slide 2
function anim_p02s02_1( prev )
{
  // Check to see if click is from previous link
  if ( prev != null ) {

    anim_p2_s2.stop();
  } else {
    $( '#anim_p02s02' ).toggleClass( 'inactive active' );

    // Initialize animation
    anim_p2_s2 = init_anim( 'anim_p02s02', '../bodymovin/p02s02/data.json' );    
  }


  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p02s02-1' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Open animation and stop on frame 1
  anim_p2_s2.addEventListener( 'data_ready', function(){
    anim_p2_s2.goToAndStop( 1, true );
  }, false);
};


function anim_p02s02_2( prev )
{
  // Check to see if click is from previous link
  if ( prev != null ) {
    //Activate animation and tooltip
    $( '#anim_p02s02' ).toggleClass( 'inactive active' );
    // Initialize animation
    anim_p2_s2 = init_anim( 'anim_p02s02', '../bodymovin/p02s02/data.json' );
    // Trigger animation
    // Open animation and stop on frame 1
    anim_p2_s2.addEventListener( 'data_ready', function(){
      anim_p2_s2.goToAndStop( 1, true );
    }, false);
  } else {
    
  }

  //Activate animation and tooltip
  setTimeout( function() {
    $( '#tip_p02s02-2' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Start animation after 1500ms
  setTimeout( function(){
    anim_p2_s2.play();
    anim_p2_s2.addEventListener( 'loopComplete', function(){
      anim_p2_s2.goToAndStop( 77, true );
    });
  }, 1500);
};


// Slide 3
function anim_p02s03()
{
  //Activate animation and tooltip
  $( '#anim_p02s03' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p02s03' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};


// Slide 4
function anim_p02s04()
{
  //Activate animation and tooltip
  $( '#anim_p02s04' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p02s04' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // No animation for this slide
};


// Slide 5
function anim_p02s05()
{
  // Initialize animation
  anim_p2_s5 = init_anim( 'anim_p02s05', '../bodymovin/p02s05/data.json' );

  //Activate animation and tooltip
  $( '#anim_p02s05' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p02s05' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  // Open animation and stop on frame 1
  anim_p2_s5.addEventListener( 'data_ready', function(){
    anim_p2_s5.goToAndStop( 1, true );
  }, false);

  // Start animation after 1500ms
  setTimeout( function(){
    anim_p2_s5.play();
    anim_p2_s5.addEventListener( 'loopComplete', function(){
      anim_p2_s5.goToAndStop( 119, true );
    });
  }, 1500);
};












  //////////////////////////////////////////////////////
  //////////////////// NEXT BUTTONS ////////////////////
  //////////////////////////////////////////////////////

  //////////////////////
  // PATH 01 || 2 - 10 //
  //////////////////////

  
  // SLIDE 01

    // Check for "next" click
    $( '#tip_p01s01 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02();

      //Change progression
      $( '#path_01_progress .one' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .two' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 02

    // Check for "next" click
    $( '#tip_p01s02 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s02' ).toggleClass( 'active inactive' );
      $( '#tip_p01s02' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s03_1();

      //Change progression
      $( '#path_01_progress .two' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .three' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 03

    // Check for "next" click
    $( '#tip_p01s03-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s03-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s03_2();
    });

    // Check for "next" click
    $( '#tip_p01s03-2 .link' ).on( 'click', function(){
      $( '#anim_p01s03' ).toggleClass( 'active inactive' );

      // Deactivate animation and tooltip
      $( '#tip_p01s03-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_1();

      //Change progression
      $( '#path_01_progress .three' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .four' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 04

    // Check for "next" click
    $( '#tip_p01s04-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_2();
    });

    // Check for "next" click
    $( '#tip_p01s04-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_3();
    });

    // Check for "next" click
    $( '#tip_p01s04-3 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_4();
    });

    // Check for "next" click
    $( '#tip_p01s04-4 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-4' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_5();
    });

    // Check for "next" click
    $( '#tip_p01s04-5 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-5' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_6();
    });

    // Check for "next" click
    $( '#tip_p01s04-6 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-6' ).toggleClass( 'active inactive' );
      $( '#anim_p01s04' ).toggleClass( 'active inactive' );;

      // Call next screen/animation
      anim_p01s05();

      //Change progression
      $( '#path_01_progress .four' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .five' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 05

    // Check for "next" click
    $( '#tip_p01s05 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s05' ).toggleClass( 'active inactive' );
      $( '#tip_p01s05' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06();

      //Change progression
      $( '#path_01_progress .five' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .six' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 06

    // Check for "next" click
    $( '#tip_p01s06 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s06' ).toggleClass( 'active inactive' );
      $( '#tip_p01s06' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s07();

      //Change progression
      $( '#path_01_progress .six' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .seven' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 07

    // Check for "next" click
    $( '#tip_p01s07 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s07' ).toggleClass( 'active inactive' );
      $( '#tip_p01s07' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s08();

      //Change progression
      $( '#path_01_progress .seven' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .eight' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 08

    // Check for "next" click
    $( '#tip_p01s08 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s08' ).toggleClass( 'active inactive' );
      $( '#tip_p01s08' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s09_1();

      //Change progression
      $( '#path_01_progress .eight' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .nine' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 09

    // Check for "next" click
    $( '#tip_p01s09-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s09-1' ).toggleClass( 'active inactive' );
      $( '#tip_p01s09-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s09_2();
    });

    // Check for "next" click
    $( '#tip_p01s09-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s09-2' ).toggleClass( 'active inactive' );
      $( '#tip_p01s09-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s10();

      //Change progression
      $( '#path_01_progress .nine' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .ten' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 10
  // END
    // Check for "next" click
    $( '#tip_p01s10 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s10' ).toggleClass( 'active inactive' );
      $( '#tip_p01s10' ).toggleClass( 'active inactive' );
      
      //Deactivate Path 01
      $( '#path_01' ).toggleClass( 'active inactive' );
      
      //Activate End Screen
      $( '#end' ).toggleClass( 'inactive active' );
    });



  //////////////////////////
  //// PATH 02 || 2 - 5 ////
  //////////////////////////

  // SLIDE 01

  //Check for "next" click
  $( '#tip_p02s01 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#anim_p02s01' ).toggleClass( 'active inactive' );
    $( '#tip_p02s01' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s02_1();

    //Change progression
    $( '#path_02_progress .one' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .two' ).toggleClass( 'inactive active' );
  });


  // SLIDE 02

  //Check for "next" click
  $( '#tip_p02s02-1 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#tip_p02s02-1' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s02_2();
  });


  //Check for "next" click
  $( '#tip_p02s02-2 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#anim_p02s02' ).toggleClass( 'active inactive' );
    $( '#tip_p02s02-2' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s03();

    //Change progression
    $( '#path_02_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .three' ).toggleClass( 'inactive active' );
  });


  // SLIDE 03

  //Check for "next" click
  $( '#tip_p02s03 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#anim_p02s03' ).toggleClass( 'active inactive' );
    $( '#tip_p02s03' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s04();

    //Change progression
    $( '#path_02_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .four' ).toggleClass( 'inactive active' );
  });


  // SLIDE 04

  //Check for "next" click
  $( '#tip_p02s04 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#anim_p02s04' ).toggleClass( 'active inactive' );
    $( '#tip_p02s04' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s05();

    //Change progression
    $( '#path_02_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .five' ).toggleClass( 'inactive active' );
  });

  
  // SLIDE 5
  // END
    // Check for "next" click
    $( '#tip_p02s05 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p02s5' ).toggleClass( 'active inactive' );
      $( '#tip_p02s05' ).toggleClass( 'active inactive' );
      
      //Deactivate Path 01
      $( '#path_02' ).toggleClass( 'active inactive' );
      
      //Activate End Screen
      $( '#end' ).toggleClass( 'inactive active' );
    });



//////////////////////////////////////////////////////////
//////////////////// PREVIOUS BUTTONS ////////////////////
//////////////////////////////////////////////////////////

//////////////////////
// PATH 01 || 10 - 1 //
//////////////////////


//SECTION 10

  //Check for "prev" click
  $( '#tip_p01s10 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s10' ).toggleClass( 'active inactive' );
    $( '#tip_p01s10 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s09_2();

    // Change progression
    $( '#path_01_progress .ten' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .nine' ).toggleClass( 'inactive active' );
  });


//SECTION 9

  //Check for "prev" click
  $( '#tip_p01s09-2 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s09-2' ).toggleClass( 'active inactive' );
    $( '#tip_p01s09-2 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s09_1();
  });

  //Check for "prev" click
  $( '#tip_p01s09-1 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s09-1' ).toggleClass( 'active inactive' );
    $( '#tip_p01s09-1 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s08();

    // Change progression
    $( '#path_01_progress .nine' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .eight' ).toggleClass( 'inactive active' );
  });


//SECTION 8

  //Check for "prev" click
  $( '#tip_p01s08 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s08' ).toggleClass( 'active inactive' );
    $( '#tip_p01s08 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s07();

    // Change progression
    $( '#path_01_progress .eight' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .seven' ).toggleClass( 'inactive active' );
  });



//SECTION 7

  //Check for "prev" click
  $( '#tip_p01s07 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s07' ).toggleClass( 'active inactive' );
    $( '#tip_p01s07 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s06();

    // Change progression
    $( '#path_01_progress .seven' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .six' ).toggleClass( 'inactive active' );
  });



//SECTION 6

  //Check for "prev" click
  $( '#tip_p01s06 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s06' ).toggleClass( 'active inactive' );
    $( '#tip_p01s06 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s05();

    // Change progression
    $( '#path_01_progress .six' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .five' ).toggleClass( 'inactive active' );
  });



//SECTION 5

  //Check for "prev" click
  $( '#tip_p01s05 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s05' ).toggleClass( 'active inactive' );
    $( '#tip_p01s05 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s04_6( 'fromPrev' );

    // Change progression
    $( '#path_01_progress .five' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .four' ).toggleClass( 'inactive active' );
  });




//SECTION 4

  //Check for "prev" click
  $( '#tip_p01s04-6 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#tip_p01s04-6 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s04_5();
  });

  //Check for "prev" click
  $( '#tip_p01s04-5 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#tip_p01s04-5 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s04_4();
  });

  //Check for "prev" click
  $( '#tip_p01s04-4 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#tip_p01s04-4 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s04_3();
  });

  //Check for "prev" click
  $( '#tip_p01s04-3 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#tip_p01s04-3 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s04_2();
  });

  //Check for "prev" click
  $( '#tip_p01s04-2 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#tip_p01s04-2 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s04_1( 'fromPrev' );
  });


  //Check for "prev" click
  $( '#tip_p01s04-1 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s04' ).toggleClass( 'active inactive' );
    $( '#tip_p01s04-1 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s03_2( 'fromPrev' );

    // Change progression
    $( '#path_01_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .three' ).toggleClass( 'inactive active' );
  });




//SECTION 3

  //Check for "prev" click
  $( '#tip_p01s03-2 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#tip_p01s03-2 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s03_1( 'fromPrev' );
  });

  //Check for "prev" click
  $( '#tip_p01s03-1 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s03' ).toggleClass( 'active inactive' );
    $( '#tip_p01s03-1 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s02();

    // Change progression
    $( '#path_01_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .two' ).toggleClass( 'inactive active' );
  });




//SECTION 2

  //Check for "prev" click
  $( '#tip_p01s02 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s02' ).toggleClass( 'active inactive' );
    $( '#tip_p01s02 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s01();

    // Change progression
    $( '#path_01_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .one' ).toggleClass( 'inactive active' );
  });









//////////////////////
// PATH 02 || 5 - 1 //
//////////////////////


//SECTION 05

  //Check for "previous" click
    $( '#tip_p02s05 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s05' ).toggleClass( 'active inactive' );
      $( '#tip_p02s05' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s04();

      //Change progression
      $( '#path_02_progress .five' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .four' ).toggleClass( 'inactive active' );
  });


//SECTION 04

  //Check for "previous" click
    $( '#tip_p02s04 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s04' ).toggleClass( 'active inactive' );
      $( '#tip_p02s04' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s03();

      //Change progression
      $( '#path_02_progress .four' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .three' ).toggleClass( 'inactive active' );
  });


//SECTION 03

  //Check for "previous" click
    $( '#tip_p02s03 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s03' ).toggleClass( 'active inactive' );
      $( '#tip_p02s03' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s02_2( 'fromPrev' );

      //Change progression
      $( '#path_02_progress .three' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .two' ).toggleClass( 'inactive active' );
  });


//SECTION 02

  //Check for "previous" click
    $( '#tip_p02s02-2 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#tip_p02s02-2' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s02_1( 'fromPrev' );
  });

  //Check for "previous" click
    $( '#tip_p02s02-1 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s02' ).toggleClass( 'active inactive' );
      $( '#tip_p02s02-1' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s01();

      //Change progression
      $( '#path_02_progress .two' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .one' ).toggleClass( 'inactive active' );
  });








////////////////////////////////////////////////////
//////////////////// PAGINATION ////////////////////
////////////////////////////////////////////////////



  // Change clicked pagination number to clicked item and deactivate
  // all others.  Deactivate all active tips currently active.
  function changePagination( pageClicked )
  {

    var pageNumber = $( pageClicked ).attr( 'class' ); // Grab classes of element clicked
        clickedNumber = pageNumber.split( ' ' ); // Split classes by spaces
        ancenstor = $( pageClicked ).closest( '[id]' ), // find element path with id closest to item clicked
        ancId = ancenstor.attr( 'id' ); // Grab id name of path


    // console.log(pageNumber);
    // console.log(clickedNumber);
    // console.log(pageClicked);
    // console.log(ancenstor);
    // console.log( '#' + ancId + ' ' + '.' + clickedNumber[1] );


    //Deactivate all tips
    $( '.tip' ).removeClass( 'active' );
    $( '.tip' ).removeClass( 'inactive' );
    $( '.tip' ).addClass( 'inactive' );

    //Deactivate all sections
    $( '.section' ).removeClass( 'active' );
    $( '.section' ).removeClass( 'inactive' );
    $( '.section' ).addClass( 'inactive' );

    //Deactivate all numbers
    $( '.number' ).removeClass( 'active' );
    $( '.number' ).removeClass( 'inactive' );
    $( '.number' ).addClass( 'inactive' );

    // Activate pagination number clicked
    $('#' + ancId + ' ' + '.' + clickedNumber[1] ).toggleClass('inactive active');

    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $( '.tip' ).removeClass( 'active' ); }, 500);
    setTimeout( function() { $( '.tip' ).removeClass( 'inactive' ); }, 500);
    setTimeout( function() { $( '.tip' ).addClass( 'inactive' ); }, 500);
  }



/////////////
// PATH 01 //
/////////////

  //Section 01 - Clicked
  $( '#path_01_progress .one' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s01();

  });

  //Section 02 - Clicked
  $( '#path_01_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s02();

  });

  //Section 03 - Clicked
  $( '#path_01_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s03_1();

  });

  //Section 04 - Clicked
  $( '#path_01_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s04_1();

  });

  //Section 05 - Clicked
  $( '#path_01_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s05();

  });

  //Section 06 - Clicked
  $( '#path_01_progress .six' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s06();

  });

  //Section 07 - Clicked
  $( '#path_01_progress .seven' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s07();

  });

  //Section 08 - Clicked
  $( '#path_01_progress .eight' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s08();

  });

  //Section 09 - Clicked
  $( '#path_01_progress .nine' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s09_1();

  });

  //Section 09 - Clicked
  $( '#path_01_progress .ten' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s10();

  });







/////////////
// PATH 02 //
/////////////

  //Section 01 - Clicked
  $( '#path_02_progress .one' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p02s01();

  });

  //Section 02 - Clicked
  $( '#path_02_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p02s02_1();

  });

  //Section 03 - Clicked
  $( '#path_02_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p02s03();

  });

  //Section 04 - Clicked
  $( '#path_02_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p02s04();

  });

  //Section 05 - Clicked
  $( '#path_02_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p02s05();

  });




});