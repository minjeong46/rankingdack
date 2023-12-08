<?

    include_once('./rankingdak_header.php');

    // 리액트에서 폼 전송한 데이터
    $userId = "user12";      
    $userPw = "use1234##";
    $userPhone = "01012345678";      
    $userEmail = "user12@naver.com";   
    $userLiftMember = "동의"; 
    $userAgreement = "이용약관"; 


    $sql = "INSERT INTO rankingdak_user_table (userId, userPw, userPhone, userEmail, userLiftMember, userAgreement)
            VALUES ('$userId', '$userPw', '$userPhone', '$userEmail', '$userLiftMember', '$userAgreement')";
    $result = mysqli_query($conn, $sql);

    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }



?>