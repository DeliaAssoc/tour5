///////////////////////////////////////////////////////////
//////////////////// DEFINE ANIMATIONS ////////////////////
///////////////////////////////////////////////////////////
        

var anim_p01s01,
    anim_p01s02_1,
    anim_p01s02_2,
    anim_p01s05_1,
    anim_p01s05_2,
    anim_p01s06,
    anim_p01s07_1,
    anim_p01s07_2,
    anim_p02s02,
    anim_p02s03,
    anim_p02s04,
    anim_p04s02






////////////////////////////////////////////////////////
//////////// DESTROY ANIMATIONS SELECTION //////////////
////////////////////////////////////////////////////////


function init_anim(selector, data) {
  bodymovin.destroy( anim_p01s01 );
  bodymovin.destroy( anim_p01s02_1 );
  bodymovin.destroy( anim_p01s02_2 );
  bodymovin.destroy( anim_p01s05_1 );
  bodymovin.destroy( anim_p01s05_2 );
  bodymovin.destroy( anim_p01s06 );
  bodymovin.destroy( anim_p01s07_1 );
  bodymovin.destroy( anim_p01s07_2 );
  bodymovin.destroy( anim_p02s02 );
  bodymovin.destroy( anim_p02s03 );
  bodymovin.destroy( anim_p02s04 );
  bodymovin.destroy( anim_p04s02 );

  
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
      anim_p02s1();

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
  anim_p1_s1 = init_anim( 'anim_p01s01', '../bodymovin/p01s01/data.json' );

  //Activate animation and tooltip
  $( '#anim_p01s01' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s01' ).toggleClass( 'inactive active' );
  }, 750 );

  // Trigger animation
  setTimeout( function(){
    anim_p1_s1.play();
    anim_p1_s1.addEventListener( 'loopComplete', function(){
      anim_p1_s1.goToAndStop( 100, true );
    });
  }, 1250);
};



// Slide 2
function anim_p01s02_1( prev )
{
  // Activate animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
  
  } else {
    $( '#anim_p01s02' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s02-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Initialize animation
  anim_p1_s2_1 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/01/data.json' );

  // Trigger animation
  // Start animation and pause on frame 1
  anim_p1_s2_1.addEventListener( 'data_ready', function() {
    anim_p1_s2_1.goToAndStop(1, true);
  }, false);

  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s2_1.playSegments([0, 35], true);
    setTimeout( function(){ // Use timeout to combat maximum call stack error
      anim_p1_s2_1.pause();
    }, 1000);
  }, 1250);
}


function anim_p01s02_2( prev )
{
  // Activate animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
     // Initialize animation
    anim_p1_s2_1 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/01/data.json' );   
  } else {

  }
  $( '#tip_p01s02-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s2_1.playSegments([36, 63], false);
    setTimeout( function(){ // Use timeout to combat maximum call stack error
      anim_p1_s2_1.pause();
    }, 1000);
  }, 1250);
};


function anim_p01s02_3( prev )
{
  // Activate animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p01s02' ).toggleClass( 'inactive active' );
  } else {

  }
  setTimeout( function(){ $( '#tip_p01s02-3' ).toggleClass( 'inactive active' ); }, 750 );
  
  // Initialize animation
  anim_p1_s2_2 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/02/data.json' );

  // Trigger animation
  setTimeout( function(){
    console.log( 'in the timeout' );
    anim_p1_s2_2.play();
    anim_p1_s2_2.addEventListener( 'loopComplete', function(){
      anim_p1_s2_2.goToAndStop( 81, true );
    });
  }, 1250);
};



// Slide 3

function anim_p01s03()
{
  // Activate screen/animation and tooltip
  $( '#anim_p01s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p01s03' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};



// Slide 4

function anim_p01s04()
{
  // Activate screen/animation and tooltip
  $( '#anim_p01s04' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p01s04' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};



// Slide 5

function anim_p01s05_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {

  } else {
     $( '#anim_p01s05' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s05-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Initialize animation
  anim_p1_s5_1 = init_anim( 'anim_p01s05', '../bodymovin/p01s05/01/data.json' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s5_1.play();
    anim_p1_s5_1.addEventListener( 'loopComplete', function(){
      anim_p1_s5_1.goToAndStop( 87, true );
    });
  }, 1250);
};


function anim_p01s05_2( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p01s05' ).toggleClass( 'inactive active' );
  } else {
   
  }
  setTimeout( function() { $( '#tip_p01s05-2' ).toggleClass( 'inactive active' ); }, 750 );

  // Initialize animation
  anim_p1_s5_2 = init_anim( 'anim_p01s05', '../bodymovin/p01s05/02/data.json' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s5_2.play();
    anim_p1_s5_2.addEventListener( 'loopComplete', function(){
      anim_p1_s5_2.goToAndStop( 50, true );
    });
  }, 1250);
};



// Slide 6

function anim_p01s06()
{
  // Activate screen/animation and tooltip
  $( '#anim_p01s06' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p01s06' ).toggleClass( 'inactive active' ); }, 750 );
  
  // Initialize animation
  anim_p1_s6 = init_anim( 'anim_p01s06', '../bodymovin/p01s06/data.json' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s6.play();
    anim_p1_s6.addEventListener( 'loopComplete', function(){
      anim_p1_s6.goToAndStop( 44, true );
    });
  }, 1250);
}



// Slide 7

function anim_p01s07_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {

  } else {
    $( '#anim_p01s07' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s07-1' ).toggleClass( 'inactive active' ); }, 750 );
  
  // Initialize animation
  anim_p1_s7_1 = init_anim( 'anim_p01s07', '../bodymovin/p01s07/01/data.json' );

  // Trigger animation
  anim_p1_s7_1.addEventListener( 'data_ready', function(){
    anim_p1_s7_1.goToAndStop( 1, true );
  });
}

function anim_p01s07_2( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    // Initialize animation
    anim_p1_s7_1 = init_anim( 'anim_p01s07', '../bodymovin/p01s07/01/data.json' );
  } else {

  }
  setTimeout( function() { $( '#tip_p01s07-2' ).toggleClass( 'inactive active' ); }, 750 );


  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s7_1.play();
    anim_p1_s7_1.addEventListener( 'loopComplete', function(){
      anim_p1_s7_1.goToAndStop( 180, true );
    });
  }, 2000);
}

function anim_p01s07_3( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p01s07' ).toggleClass( 'inactive active' );

    // Initialize animation
    anim_p1_s7_2 = init_anim( 'anim_p01s07', '../bodymovin/p01s07/01/data.json' );
  } else {

  }
  setTimeout( function() { $( '#tip_p01s07-3' ).toggleClass( 'inactive active' ); }, 750 );
  
  // Initialize animation
  anim_p1_s7_2 = init_anim( 'anim_p01s07', '../bodymovin/p01s07/02/data.json' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s7_2.play();
    anim_p1_s7_2.addEventListener( 'loopComplete', function(){
      anim_p1_s7_2.goToAndStop( 110, true );
    });
  }, 1250);
}


// Slide 7

function anim_p01s08()
{
  // Activate screen/animation and tooltip
  $( '#anim_p01s08' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p01s08' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}




//////////  PATH 02  //////////

// Slide 1

function anim_p02s1()
{
  // Activate screen/animation and tooltip
  setTimeout( function() { $( '#tip_p02s01' ).toggleClass( 'inactive active' ); }, 750);
  $( '#anim_p02s01' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
};



// Slide 2

function anim_p02s2()
{
  // Activate screen/animation and tooltip
  $( '#anim_p02s02' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p02s02' ).toggleClass( 'inactive active' ); }, 750 );

  // Initialize animation
  anim_p2_s2 = init_anim( 'anim_p02s02', '../bodymovin/p02s02/data.json' );

  // Trigger animation
  // Play animation and pause on frame 1
  anim_p2_s2.addEventListener( 'data_ready', function(){
    anim_p2_s2.goToAndStop( 1, true );
  });

  // Start animation after 1750ms
  setTimeout( function(){
    anim_p2_s2.play();
    anim_p2_s2.addEventListener( 'loopComplete', function(){
      anim_p2_s2.goToAndStop( 110, true );
    });
  }, 1750);
};



// Slide 3

function anim_p02s3()
{
  // Activate screen/animation and tooltip
  $( '#anim_p02s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p02s03' ).toggleClass( 'inactive active' ); }, 750 );

  // Initialize animation
  anim_p2_s3 = init_anim( 'anim_p02s03', '../bodymovin/p02s03/data.json' );

  // Trigger animation
  // Play animation and pause on frame 1
  anim_p2_s3.addEventListener( 'data_ready', function(){
    anim_p2_s3.goToAndStop( 1, true );
  });

  // Start animation after 1250ms
  setTimeout( function(){
    anim_p2_s3.play();
    anim_p2_s3.addEventListener( 'loopComplete', function(){
      anim_p2_s3.goToAndStop( 110, true );
    });
  }, 1500);
};



// Slide 4

function anim_p02s4_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    
  } else {
    $( '#anim_p02s04' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p02s04-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Initialize animation
  anim_p2_s4 = init_anim( 'anim_p02s04', '../bodymovin/p02s04/data.json' );

  // Trigger animation
  // Play animation and pause on frame 1
  anim_p2_s4.addEventListener( 'data_ready', function(){
    anim_p2_s4.goToAndStop( 1, true );
  });
};

function anim_p02s4_2( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p02s04' ).toggleClass( 'inactive active' );

    // Initialize animation
    anim_p2_s4 = init_anim( 'anim_p02s04', '../bodymovin/p02s04/data.json' );
  } else {

  }
  setTimeout( function() { $( '#tip_p02s04-2' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){
    anim_p2_s4.play();
    anim_p2_s4.addEventListener( 'loopComplete', function(){
      anim_p2_s4.goToAndStop( 93, true );
    });
  }, 1250);
};



// Slide 5

function anim_p02s5()
{
  // Activate screen/animation and tooltip
  $( '#anim_p02s05' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p02s05' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};



// Slide 6

function anim_p02s6()
{
  // Activate screen/animation and tooltip
  $( '#anim_p02s06' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p02s06' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};




//////////  PATH 03  //////////
// Slide 1

function anim_p03_1()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s01' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s01' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}

// Slide 2

function anim_p03_2()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s02' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s02' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}

// Slide 3

function anim_p03_3()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s03' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}

// Slide 4

function anim_p03_4()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s04' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s04' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}




//////////  PATH 04  //////////
// Slide 1

function anim_p04_1()
{
  // Activate screen/animation and tooltip
  $( '#anim_p04s01' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p04s01' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}


// Slide 2

function anim_p04_2_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {

  } else {
    $( '#anim_p04s02' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p04s02-1' ).toggleClass( 'inactive active' ); }, 750 );
};

function anim_p04_2_2( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p04s02' ).toggleClass( 'inactive active' );
  } else {

  }
  setTimeout( function() { $( '#tip_p04s02-2' ).toggleClass( 'inactive active' ); }, 750 );
};


// Slide 3

function anim_p04_3()
{
  // Activate screen/animation and tooltip
  $( '#anim_p04s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p04s03' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};


// Slide 4

function anim_p04_4()
{
  // Activate screen/animation and tooltip
  $( '#anim_p04s04' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p04s04' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};


// Slide 5

function anim_p04_5()
{
  // Activate screen/animation and tooltip
  $( '#anim_p04s05' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p04s05' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};


















  //////////////////////////////////////////////////////
  //////////////////// NEXT BUTTONS ////////////////////
  //////////////////////////////////////////////////////

  //////////////////////
  // PATH 01 || 2 - 7 //
  //////////////////////

  
  // SLIDE 01

    // Check for "next" click
    $( '#tip_p01s01 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_1();

      //Change progression
      $( '#path_01_progress .one' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .two' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 02

    // Check for "next" click
    $( '#tip_p01s02-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_2();
    });

    // Check for "next" click
    $( '#tip_p01s02-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_3();
    });


    // Check for "next" click
    $( '#tip_p01s02-3 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s02' ).toggleClass( 'active inactive' );
      $( '#tip_p01s02-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s03();

      //Change progression
      $( '#path_01_progress .two' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .three' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 03

    // Check for "next" click
    $( '#tip_p01s03 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s03' ).toggleClass( 'active inactive' );
      $( '#tip_p01s03' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04();

      //Change progression
      $( '#path_01_progress .three' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .four' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 04

    // Check for "next" click
    $( '#tip_p01s04 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s04' ).toggleClass( 'active inactive' );
      $( '#tip_p01s04' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s05_1();

      //Change progression
      $( '#path_01_progress .four' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .five' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 05


    // Check for "next" click
    $( '#tip_p01s05-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s05-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s05_2();
    });


    // Check for "next" click
    $( '#tip_p01s05-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s05' ).toggleClass( 'active inactive' );
      $( '#tip_p01s05-2' ).toggleClass( 'active inactive' );

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
      anim_p01s07_1();

      //Change progression
      $( '#path_01_progress .six' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .seven' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 07


    // Check for "next" click
    $( '#tip_p01s07-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s07-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s07_2();
    });

    // Check for "next" click
    $( '#tip_p01s07-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s07-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s07_3();
    });

    // Check for "next" click
    $( '#tip_p01s07-3 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s07' ).toggleClass( 'active inactive' );
      $( '#tip_p01s07-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s08();

      //Change progression
      $( '#path_01_progress .seven' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .eight' ).toggleClass( 'inactive active' );
    });

  //END
  //Check for "next" click
  $( '#tip_p01s08 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s08' ).toggleClass( 'active inactive' );
    $( '#anim_p01s08' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_01' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });











  //////////////////////////
  //// PATH 02 || 2 - 8 ////
  //////////////////////////

  // SLIDE 01

  //Check for "next" click
  $( '#tip_p02s01 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#anim_p02s01' ).toggleClass( 'active inactive' );
    $( '#tip_p02s01' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s2();

    //Change progression
    $( '#path_02_progress .one' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .two' ).toggleClass( 'inactive active' );
  });
  

  // SLIDE 02

  //Check for "next" click
  $( '#tip_p02s02 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#tip_p02s02' ).toggleClass( 'active inactive' );
    $( '#anim_p02s02' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s3();

    //Change progression
    $( '#path_02_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .three' ).toggleClass( 'inactive active' );
  });
  

  // SLIDE 03

  //Check for "next" click
  $( '#tip_p02s03 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#tip_p02s03' ).toggleClass( 'active inactive' );
    $( '#anim_p02s03' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s4_1();

    //Change progression
    $( '#path_02_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .four' ).toggleClass( 'inactive active' );
  });
  

  // SLIDE 04

  //Check for "next" click
  $( '#tip_p02s04-1 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#tip_p02s04-1' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s4_2();
  });

  //Check for "next" click
  $( '#tip_p02s04-2 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#anim_p02s04' ).toggleClass( 'active inactive' );
    $( '#tip_p02s04-2' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s5();

    //Change progression
    $( '#path_02_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .five' ).toggleClass( 'inactive active' );
  });
  

  // SLIDE 05

  //Check for "next" click
  $( '#tip_p02s05 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#anim_p02s05' ).toggleClass( 'active inactive' );
    $( '#tip_p02s05' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s6();

    //Change progression
    $( '#path_02_progress .five' ).toggleClass( 'active inactive' );
    $( '#path_02_progress .six' ).toggleClass( 'inactive active' );
  });


  //END
  //Check for "next" click
  $( '#tip_p02s06 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p02s06' ).toggleClass( 'active inactive' );
    $( '#anim_p02s06' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_02' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });











  //////////////////////
  // PATH 03 || 2 - 4 //
  //////////////////////

  //SECTION 02
  // Check for "next" click
  $( '#tip_p03s01 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#tip_p03s01' ).toggleClass( 'active inactive' );
    $( '#anim_p03s01' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_2();

    // Change progression
    $( '#path_03_progress .one' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .two' ).toggleClass( 'inactive active' );
  });


  //SECTION 03
  //Check for "next" click
  $( '#tip_p03s02 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s02' ).toggleClass( 'active inactive');
    $( '#anim_p03s02' ).toggleClass( 'active inactive' );

    //Call animation
    anim_p03_3();

    //Change progression
    $( '#path_03_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .three' ).toggleClass( 'inactive active' );
  });


  $ ( '#tip_p03s03 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#anim_p03s03' ).toggleClass( 'active inactive' );
    $( '#tip_p03s03' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_4();

    //Change progression
    $( '#path_03_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .four' ).toggleClass( 'inactive active' );
  });



  //END
  //Check for "next" click
  $( '#tip_p03s04 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p03s04' ).toggleClass( 'active inactive' );
    $( '#anim_p03s04' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_03' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });











  //////////////////////
  // PATH 04 || 2 - 5 //
  //////////////////////

  //SECTION 02
  // Check for "next" click
  $( '#tip_p04s01 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#tip_p04s01' ).toggleClass( 'active inactive' );
    $( '#anim_p04s01' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p04_2_1();

    // Change progression
    $( '#path_04_progress .one' ).toggleClass( 'active inactive' );
    $( '#path_04_progress .two' ).toggleClass( 'inactive active' );
  });

  // Check for "next" click
  $( '#tip_p04s02-1 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#tip_p04s02-1' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p04_2_2();
  });

  // Check for "next" click
  $( '#tip_p04s02-2 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#anim_p04s02' ).toggleClass( 'active inactive' );
    $( '#tip_p04s02-2' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p04_3();


    // Change progression
    $( '#path_04_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_04_progress .three' ).toggleClass( 'inactive active' );
  });


  //SECTION 03
  // Check for "next" click
  $( '#tip_p04s03 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#tip_p04s03' ).toggleClass( 'active inactive' );
    $( '#anim_p04s03' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p04_4();

    // Change progression
    $( '#path_04_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_04_progress .four' ).toggleClass( 'inactive active' );
  });


  //SECTION 04
  // Check for "next" click
  $( '#tip_p04s04 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#tip_p04s04' ).toggleClass( 'active inactive' );
    $( '#anim_p04s04' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p04_5();

    // Change progression
    $( '#path_04_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_04_progress .five' ).toggleClass( 'inactive active' );
  });


  //END
  //Check for "next" click
  $( '#tip_p04s05 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p04s05' ).toggleClass( 'active inactive' );
    $( '#anim_p04s05' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_04' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });







//////////////////////////////////////////////////////////
//////////////////// PREVIOUS BUTTONS ////////////////////
//////////////////////////////////////////////////////////

//////////////////////
// PATH 01 || 8 - 1 //
//////////////////////


//SECTION 08

  //Check for "prev" click
  $( '#tip_p01s08 .prev' ).on( 'click', function(){

    //Deactivate tip and animation
    $( '#anim_p01s08' ).toggleClass( 'active inactive' );
    $( '#tip_p01s08 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s07_3( 'fromPrev' );

    // Change progression
    $( '#path_01_progress .eight' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .seven' ).toggleClass( 'inactive active' );
  });


//SECTION 07

  //Check for "prev" click
  $( '#tip_p01s07-3 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip  
    $( '#tip_p01s07-3' ).toggleClass( 'active inactive' );

    // Trigger Animation
    anim_p01s07_2( 'fromPrev' );
  });


  //Check for "prev" click
  $( '#tip_p01s07-2 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p01s07-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s07_1( 'fromPrev' ); 
  });


  //Check for "prev" click
  $( '#tip_p01s07-1 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#anim_p01s07' ).toggleClass( 'active inactive' );
    $( '#tip_p01s07-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s06();

    //Change progression
    $( '#path_01_progress .seven' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .six' ).toggleClass( 'inactive active' ); 
  });



//SECTION 06

  //Check for "prev" click
  $( '#tip_p01s06 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#anim_p01s06' ).toggleClass( 'active inactive' );
    $( '#tip_p01s06' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s05_2( 'fromPrev' );

    //Change progression
    $( '#path_01_progress .six' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .five' ).toggleClass( 'inactive active' ); 
  });



//SECTION 05

  //Check for "prev" click
  $( '#tip_p01s05-2 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p01s05-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s05_1( 'fromPrev' );
  });

  //Check for "prev" click
  $( '#tip_p01s05-1 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#anim_p01s05' ).toggleClass( 'active inactive' );
    $( '#tip_p01s05-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s04();

    //Change progression
    $( '#path_01_progress .five' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .four' ).toggleClass( 'inactive active' );
  });



//SECTION 04

  //Check for "previous" click
  $( '#tip_p01s04 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#anim_p01s04' ).toggleClass( 'active inactive' );    
    $( '#tip_p01s04' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s03();

    //Change progression
    $( '#path_01_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .three' ).toggleClass( 'inactive active' );
  });


//SECTION 03

  //Check for "previous" click
  $( '#tip_p01s03 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s03' ).toggleClass( 'active inactive' );
    $( '#tip_p01s03' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_3( 'fromPrev' );

    //Change progression
    $( '#path_01_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .two' ).toggleClass( 'inactive active' );
  });


//SECTION 02

  //Check for "previous" click
  $( '#tip_p01s02-3 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-3' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_2( 'fromPrev' );
  });

  //Check for "previous" click
  $( '#tip_p01s02-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_1( 'fromPrev' );
  });

  //Check for "previous" click
  $( '#tip_p01s02-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s02' ).toggleClass( 'active inactive' );
    $( '#tip_p01s02-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s01();

    //Change progression
    $( '#path_01_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .one' ).toggleClass( 'inactive active' );
  });







//////////////////////
// PATH 03 || 6 - 1 //
//////////////////////


//SECTION 06

  //Check for "previous" click
    $( '#tip_p02s06 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s06' ).toggleClass( 'active inactive' );
      $( '#tip_p02s06' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s5();

      //Change progression
      $( '#path_02_progress .six' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .five' ).toggleClass( 'inactive active' );
  });


//SECTION 05

  //Check for "previous" click
    $( '#tip_p02s05 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s05' ).toggleClass( 'active inactive' );
      $( '#tip_p02s05' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s4_2( 'fromPrev' );

      //Change progression
      $( '#path_02_progress .five' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .four' ).toggleClass( 'inactive active' );
  });


//SECTION 04

  //Check for "previous" click
    $( '#tip_p02s04-2 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#tip_p02s04-2' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s4_1( 'fromPrev' );
  });

  //Check for "previous" click
    $( '#tip_p02s04-1 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s04' ).toggleClass( 'active inactive' );
      $( '#tip_p02s04-1' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s3();

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
      anim_p02s2();

      //Change progression
      $( '#path_02_progress .three' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .two' ).toggleClass( 'inactive active' );
  });


//SECTION 02

  //Check for "previous" click
    $( '#tip_p02s02 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s02' ).toggleClass( 'active inactive' );
      $( '#tip_p02s02' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s1();

      //Change progression
      $( '#path_02_progress .two' ).toggleClass( 'active inactive' );
      $( '#path_02_progress .one' ).toggleClass( 'inactive active' );
  });



//////////////////////
// PATH 03 || 4 - 1 //
//////////////////////


//SECTION 04

  //Check for "previous" click
  $( '#tip_p03s04 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s04' ).toggleClass( 'active inactive' );
    $( '#anim_p03s04' ).toggleClass( 'active inactive');

    //Call animation
    anim_p03_3();

    // Change progression
    $( '#path_03_progress .four' ).toggleClass('active inactive');
    $( '#path_03_progress .three' ).toggleClass('inactive active');
  });


//SECTION 03

  //Check for "previous" click
  $( '#tip_p03s03 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s03' ).toggleClass( 'active inactive' );
    $( '#anim_p03s03' ).toggleClass( 'active inactive');

    //Call animation
    anim_p03_2();

    // Change progression
    $( '#path_03_progress .three' ).toggleClass('active inactive');
    $( '#path_03_progress .two' ).toggleClass('inactive active');
  });


//SECTION 02

  //Check for "previous" click
  $( '#tip_p03s02 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s02' ).toggleClass( 'active inactive' );
    $( '#anim_p03s02' ).toggleClass( 'active inactive');

    //Call animation
    anim_p03_1();

    // Change progression
    $( '#path_03_progress .two' ).toggleClass('active inactive');
    $( '#path_03_progress .one' ).toggleClass('inactive active');
  });



//////////////////////
// PATH 04 || 5 - 1 //
//////////////////////


//SECTION 05

  //Check for "previous" click
  $( '#tip_p04s05 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p04s05' ).toggleClass( 'active inactive' );
    $( '#anim_p04s05' ).toggleClass( 'active inactive');

    //Call animation
    anim_p04_4();

    // Change progression
    $( '#path_04_progress .five' ).toggleClass('active inactive');
    $( '#path_04_progress .four' ).toggleClass('inactive active');
  });


//SECTION 04

  //Check for "previous" click
  $( '#tip_p04s04 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p04s04' ).toggleClass( 'active inactive' );
    $( '#anim_p04s04' ).toggleClass( 'active inactive');

    //Call animation
    anim_p04_3();

    // Change progression
    $( '#path_04_progress .four' ).toggleClass('active inactive');
    $( '#path_04_progress .three' ).toggleClass('inactive active');
  });


//SECTION 03

  //Check for "previous" click
  $( '#tip_p04s03 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p04s03' ).toggleClass( 'active inactive' );
    $( '#anim_p04s03' ).toggleClass( 'active inactive');

    //Call animation
    anim_p04_2_2( 'fromPrev' );

    // Change progression
    $( '#path_04_progress .three' ).toggleClass('active inactive');
    $( '#path_04_progress .two' ).toggleClass('inactive active');
  });


//SECTION 02

  //Check for "previous" click
  $( '#tip_p04s02-2 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p04s02-2' ).toggleClass( 'active inactive' );

    //Call animation
    anim_p04_2_1( 'fromPrev' );
  });

  //Check for "previous" click
  $( '#tip_p04s02-1 .prev' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#anim_p04s02' ).toggleClass( 'active inactive' );
    $( '#tip_p04s02-1' ).toggleClass( 'active inactive' );

    //Call animation
    anim_p04_1();

    // Change progression
    $( '#path_04_progress .two' ).toggleClass('active inactive');
    $( '#path_04_progress .one' ).toggleClass('inactive active');
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

    //Activate Section 02 tip & animation
    anim_p01s02_1();
  });



  //Section 03 - Clicked
  $( '#path_01_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 03 tip & animation
    anim_p01s03();
    
  });



  //Section 04 - Clicked
  $( '#path_01_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 04 tip & animation
    anim_p01s04();
  });



  //Section 05 - Clicked
  $( '#path_01_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 05 tip & animation
    anim_p01s05_1();
  });



  //Section 06 - Clicked
  $( '#path_01_progress .six' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 06 tip & animation
    anim_p01s06();
  });



  //Section 07 - Clicked
  $( '#path_01_progress .seven' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 06 tip & animation
    anim_p01s07_1();
  });



  //Section 08 - Clicked
  $( '#path_01_progress .eight' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 06 tip & animation
    anim_p01s08();
  });





/////////////
// PATH 02 //
/////////////

  //Section 01 - Clicked
  $( '#path_02_progress .one' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p02s1();

  });



  //Section 02 - Clicked
  $( '#path_02_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 02 tip & animation
    anim_p02s2();
  });



  //Section 03 - Clicked
  $( '#path_02_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 03 tip & animation
    anim_p02s3();
    
  });



  //Section 04 - Clicked
  $( '#path_02_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 04 tip & animation
    anim_p02s4_1();
  });



  //Section 05 - Clicked
  $( '#path_02_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 05 tip & animation
    anim_p02s5();
  });



  //Section 06 - Clicked
  $( '#path_02_progress .six' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 06 tip & animation
    anim_p02s6();
  });








/////////////
// PATH 03 //
/////////////

  //Section 01 - Clicked
  $( '#path_03_progress .one' ).on( 'click', function(){
    
    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_1();
  });

  //Section 02 - Clicked
  $( '#path_03_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_2();
  });

  //Section 03 - Clicked
  $( '#path_03_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_3();
  });

  //Section 04 - Clicked
  $( '#path_03_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_4();
  });








/////////////
// PATH 04 //
/////////////

  //Section 01 - Clicked
  $( '#path_04_progress .one' ).on( 'click', function(){
    
    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p04_1();
  });

  //Section 02 - Clicked
  $( '#path_04_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p04_2_1();
  });

  //Section 03 - Clicked
  $( '#path_04_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p04_3();
  });

  //Section 04 - Clicked
  $( '#path_04_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p04_4();
  });

  //Section 05 - Clicked
  $( '#path_04_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p04_5();
  });

});