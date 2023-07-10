<?php if(!isset($_SESSION)) {
    session_start();
}
include_once "controls/includes.php";

if(isset($_POST['login'])) {
    $res = LoginwithOTP($con, $_POST['key']);
    if(is_bool($res) && !$res) {
        $ERRTXT = "Girmiş olduğunuz tek kullanımlık anahtar kullanılmış yada yok.";
    }
    else {
        header("location: anasayfa.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en" style="height: 100%" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Yap</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

</head>
<body style="height: 100%;">
<div id="navbar"></div>
<?php if(isset($ERRTXT)) { bsRaiseToast($ERRTXT, false);}?>
<form action="" method="post" class="d-flex align-items-center justify-content-center" style="height: 100%;">
    <div class="card border-0" style="width: 30%; max-width: 320px;">
        <div class="card-body d-flex flex-column p-3">
            <input class="mt-1 mb-3 form-control" type="text" id="key" name="key" placeholder="Tek seferlik şifreyi giriniz" required>
            <input class="btn btn-light" type="submit" value="Giriş Yap" name="login" required>
	    </div>
    </div>
</form>
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="src/navbar.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script> 
<script src="src/script.js"></script>
</body>
</html>
<?php 
$el = "<script>
</script>";
?>
