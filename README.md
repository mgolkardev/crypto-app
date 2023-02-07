## شروع

برای نصب پکیج ها لطفا دستور زیر را اجرا کنید:

```bash
yarn
# or
npm i
```

## بیلد پروژه

برای بیلد کردن پروژه لطفا دستور زیر را اجرا کنید:

```bash
yarn build
# or
npm run build
```

## اجرای پروژه

برای اجرای پروژه لطفا دستور زیر را اجرا کنید:

```bash
yarn dev # development mode
yarn start
# or
npm run dev # development mode
npm run start
```

جهت مشاهده وب به آدرس [http://localhost:3000](http://localhost:3000) مراجعه نمایید.

## ماک

اگر با محدودیت سرویس دهنده روبرو شدید یا تمایل داشتید پروژه در محیط ماک اجرا شود لطفا فایل env. را به زیر تغییر دهید:

```bash
NEXT_PUBLIC_CURRENCY_API_BASE_URL=

#یا فایل .env.local بسازید.
```

## نکته!

با توجه به اینکه سرویس `markets` برای فیلتر `id` رمز ارز می پذیرد و سرویس `supported_vs_currencies` تنها `symbol` خروجی می دهد بدیهی است که با انتخاب یک یا چند رمز ارز پیام Not Found مشاهده نمایید!

## مستندات سرویس دهنده

https://www.coingecko.com/en/api/documentation

## توضیحات نهایی

در این پروژه سعی شده تمامی موارد بسیار ساده و بدون نصب پکیج های اضافی انجام شود. پروژه بصورت Responsive طراحی شده و با تغییر اندازه صفحه می توانید موارد پیاده سازی شده را مشاهده نمایید. قطعا این پروزه ماننده هر پروژه دیگری جای بهبود دارد و این تازه شروع کار است!


# Screenshots

![alt text](https://s2.uupload.ir/files/1_0vex.png)
![alt text](https://s2.uupload.ir/files/2_u67m.png)
