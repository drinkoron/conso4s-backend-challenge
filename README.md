**Employee Check-In / Check-Out by QR code.**

Acme company has the requirement to check employees in / out by scanning individual employee's QR codes. So when
employee comes to the office or leaves it, the QR code reader scans the employee's QR code and checks him/her in/out.

As an administrator I want to
- be able to register new employee in the system (providing just employee's first and last names)
- be able to list all employees in the system with following information:
    - Employee id
    - Employee first name
    - Employee last name
    - Employee status (Checked In / Checked Out / Unknown (if employee didn't checked in / checked out at all)
    - Status change time

As an employee I want to
- be able to receive my QR code for check in / checkout by navigating to some url on the website providing my id in the url
  (like  https://acme/employees/:employeeId/qr-code).
- be able to use my QR code at the office entrance so that when QR code reader scans one, it checks me in If I was checked out or use the qr first time,
  and checks me out if I was previously checked in.


Please note that all this functionality can be implemented on the http api level without UI, no authentication / authorization required.

You need to design model, endpoints and come up with solution yourself.

As a QR code reader we just can use phone, the phone should read the QR code 
(most phones have qr code reader) and the employee status should be changed (should be checked in / checked out, please come up with the solution yourself).

You can use any framework for the implementation.

You can store data with any persistent library, it can be in-memory database or even in-memory structures.

For QR code generation you can use any npm lib (for example https://www.npmjs.com/package/qrcode)

Please provide deployment instructions in `Deployment.md` file.

Start off from this repository, clone it, create your own repo on github and provide us the link to your repo.
