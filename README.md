# App

Gympass style app.

## FRs (Functional requirements)

- [x] It should be possible to register.
- [x] It should be possible to authenticate.
- [x] It must be possible to get the data of the logged in user.
- [x] It must be possible to obtain the number of check-ins performed by the logged-in user.
- [x] It must be possible to obtain check-in history.
- [ ] It should be possible to search for nearby gyms.
- [ ] It should be possible to search for gyms by name.
- [ ] It must be possible to check in at a gym.
- [x] It must be possible to validate the user's check in.
- [x] It should be possible to register an academy.

## BRs (Business rules)

- [x] The user cannot register with a duplicate email.
- [x] The user cannot make two check-ins on the same day.
- [x] The user cannot check in if he is not 100 meters from the gym.
- [ ] Check in can only be validated 20 minutes after creation.
- [ ] Check in can only be validated by administrators.
- [ ] The academy can only be registered by administrators.

## NFRs (Non-functional requirements)

- [x] User password can only be encrypted.
- [x] Application data must be persisted in a PostgreSQL database.
- [x] All lists need pagination with 20 pages.
- [ ] The user must be identified by a JWT.