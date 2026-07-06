<?php
// 1. إعدادات حسابك ومستودع GitHub (تم ملؤها تلقائياً بناءً على الرابط والتوكن الخاص بك)
$github_token = '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'; 
$username     = 'shinigami-e';              
$repo_name    = 'fille';              
$branch       = 'main';                              

$message = '';
$status_class = '';

// 2. معالجة الملف عند الضغط على زر الرفع
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['fileToUpload'])) {
    $file = $_FILES['fileToUpload'];

    if ($file['error'] === UPLOAD_ERR_OK) {
        $file_name = basename($file['name']);
        $file_path = $file['tmp_name'];
        
        // قراءة محتوى الملف وتحويله إلى صيغة Base64
        $file_content = base64_encode(file_get_contents($file_path));
        
        // رابط الـ API الخاص بـ GitHub لرفع الملفات
        $url = "https://api.github.com/repos/$username/$repo_name/contents/$file_name";
        
        // البيانات المرسلة إلى API
        $data = [
            'message' => "Upload file: " . $file_name . " via PHP Web Interface",
            'content' => $file_content,
            'branch'  => $branch
        ];
        
        // إعداد اتصال cURL لإرسال الطلب
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT"); 
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Authorization: token $github_token",
            "User-Agent: PHP-GitHub-Uploader", 
            "Accept: application/vnd.github.v3+json",
            "Content-Type: application/json"
        ]);
        
        $response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        // التحقق من نتيجة الرفع
        if ($http_code == 201) {
            $message = "🎉 تم رفع الملف بنجاح إلى مستودع GitHub الخاص بك ($repo_name)!";
            $status_class = "success";
        } else {
            $res_data = json_decode($response, true);
            $error_detail = isset($res_data['message']) ? $res_data['message'] : 'خطأ غير معروف';
            $message = "❌ فشل الرفع. كود الخطأ: $http_code - السبب: $error_detail";
            $status_class = "error";
        }
    } else {
        $message = "❌ حدث خطأ أثناء تحميل الملف من جهازك.";
        $status_class = "error";
    }
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رفع الملفات إلى GitHub</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #12161a;
            color: #e1e7ed;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .upload-container {
            background: linear-gradient(145deg, #1e252b, #171c21);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            width: 90%;
            max-width: 400px;
            text-align: center;
        }
        h2 { margin-bottom: 20px; font-size: 22px; color: #3498db; }
        input[type="file"] {
            display: none;
        }
        .file-label {
            display: block;
            background: #1a202c;
            border: 1px dashed rgba(255,255,255,0.2);
            padding: 20px;
            border-radius: 10px;
            cursor: pointer;
            margin-bottom: 20px;
            transition: border 0.3s;
        }
        .file-label:hover { border-color: #3498db; }
        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(180deg, #38424d 0%, #1e252b 100%);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: white;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease;
        }
        button:hover { transform: translateY(-2px); border-color: #2ecc71; box-shadow: 0 6px 20px rgba(46, 204, 113, 0.2); }
        .alert {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 15px;
            font-size: 14px;
        }
        .success { background-color: rgba(46, 204, 113, 0.2); color: #2ecc71; border: 1px solid #2ecc71; }
        .error { background-color: rgba(231, 76, 60, 0.2); color: #e74c3c; border: 1px solid #e74c3c; }
    </style>
</head>
<body>

<div class="upload-container">
    <h2>رفع ملف إلى مستودع fille</h2>
    
    <?php if (!empty($message)): ?>
        <div class="alert <?php echo $status_class; ?>">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>

    <form action="" method="post" enctype="multipart/form-data">
        <label for="fileToUpload" class="file-label">
            📁 اضغط هنا لاختيار الملف
        </label>
        <input type="file" name="fileToUpload" id="fileToUpload" required onchange="updateLabel(this)">
        <div id="file-name-display" style="margin-bottom: 15px; font-size: 13px; color: #a0aec0;"></div>
        <button type="submit">ابدأ الرفع الآن</button>
    </form>
</div>

<script>
function updateLabel(input) {
    const display = document.getElementById('file-name-display');
    if (input.files && input.files.length > 0) {
        display.innerText = "الملف المختار: " + input.files[0].name;
    }
}
</script>

</body>
</html>
