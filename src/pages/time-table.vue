<template>
  <q-card
    style="
      flex-basis: 83%;
      margin-block-start: 10px;
      margin-block-end: 30px;
      margin-inline: 15px;
      border-radius: 30px;
      filter: drop-shadow(0 0px 5px rgb(0 0 0 / 20%));
      box-shadow: none;
    "
  >
    <q-card-section style="padding-inline: 0">
      <q-toolbar class="q-px-lg">
        <div class="text-secondary">
          לוח עתים לבינה
          <div class="text-h5 text-weight-bold">גבעת וושינגטון</div>
        </div>
      </q-toolbar>
      <q-separator
        size="2px"
        style="
          background: #d5d6b380;
          margin-block-start: 24px;
          margin-block-end: 12px;
        "
      />
      <div class="row justify-between q-px-md">
        <div>
          <q-icon
            name="chevron_right"
            size="md"
            style="color: #1a6476"
          ></q-icon>
          <span class="text-caption" style="color: #828282">ליום הקודם</span>
        </div>
        <div
          class="row justify-between items-center text-center"
          style="background-color: #c6c6c6; border-radius: 51px; width: 175px"
        >
          <span
            class="text-white text-weight-bold text-subtitle2 q-py-xs"
            style="background-color: #390713; border-radius: 51px; width: 66px"
            >שבועי
          </span>
          <span
            class="text-subtitle2 q-py-xs"
            style="color: #390713; border-radius: 51px; width: 50px"
            >חודשי</span
          >
          <span
            class="text-subtitle2 q-py-xs"
            style="color: #390713; border-radius: 51px; width: 50px"
            >יומי</span
          >
        </div>
        <div>
          <span class="text-caption" style="color: #828282">ליום הבא</span>
          <q-icon name="chevron_left" size="md" style="color: #1a6476"></q-icon>
        </div>
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #696b3290;
          margin-block-start: 14px;
        "
      />

      <q-card
        class="q-mx-lg q-px-lg"
        style="
          background-color: #ebebe3;
          margin-block-start: 20px;
          border-radius: 16px 16px 0 0;
          box-shadow: none;
        "
      >
        <q-card-section style="padding-inline: 0">
          <div class="row justify-between items-center">
            <div class="text-h4 text-accent text-weight-bold">
              כ"ח באדר ב', התשפ"ד
            </div>
            <div class="row items-center">
              <q-icon
                name="mark_unread_chat_alt"
                size="lg"
                style="color: #696b32"
                class="q-mr-sm"
              ></q-icon>
              <div class="text-primary text-subtitle2">
                <span class="text-weight-bold"
                  >בליל שישי עוברים לשעון קיץ:</span
                >
                <div>יש להזיז את השעון בשעה 2:00 בלילה, לשעה 3:00 בלילה</div>
              </div>
            </div>
            <div class="text-h5 text-accent">24 בספטמבר, 2024</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card
        class="q-mx-lg q-px-lg"
        style="
          background-color: #f7f7f7;
          margin-block-start: 5px;
          border-radius: 16px;
          box-shadow: none;
          padding: 0;
        "
      >
        <q-card-section style="padding: 0">
          <div class="row justify-between">
            <div class="q-px-lg q-py-md">
              <span
                class="text-accent text-weight-bold"
                style="font-size: 26px"
              >
                ערב פסח
              </span>
              <span class="text-accent text-h6 q-mx-md">|</span>
              <span class="text-accent text-h6">פרשת אלף בית גימל דלת</span>
            </div>
            <div
              class="q-px-lg q-py-md"
              style="background-color: #ececec; border-radius: 16px 0 16px 0"
            >
              <div class="row items-center">
                <q-icon
                  name="today"
                  size="md"
                  class="text-primary q-mr-sm"
                ></q-icon>

                <span
                  class="text-primary text-weight-bold"
                  style="font-size: 18px"
                >
                  במוצ"ש סופרים ה' בעומר
                </span>
              </div>
            </div>
          </div>
          <div class="q-px-lg">
            <span class="text-weight-bold" style="color: #282828"> הפטרה </span>
            <div>
              טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
              טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסטטקסט טקסט
              טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
              טקסט טקסט טקסט טקסט טקסט טקסט
            </div>
          </div>
          <div class="q-px-lg q-mt-lg row no-wrap">
            <div class="row no-wrap q-pt-xs" style="flex-basis: 33.3%">
              <q-icon
                name="book"
                size="md"
                class="text-secondary q-mr-md"
              ></q-icon>
              <p class="text-subtitle2" style="color: #851220">
                תפילת טל, ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...תפילת
                טל, ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...תפילת טל,
                ומוריד הטל. בערב...תפילת טל, ומוריד הטל..
              </p>
            </div>
            <q-separator
              class="q-mx-md"
              vertical
              inset
              style="
                width: 0;
                background-color: transparent;
                border-left: 2px dotted #00000080;
                height: 80px;
              "
            />
            <div class="row no-wrap q-pt-xs" style="flex-basis: 33.3%">
              <q-icon
                name="book"
                size="md"
                class="text-secondary q-mr-md"
              ></q-icon>
              <p class="text-subtitle2" style="color: #851220">
                תפילת טל, ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...תפילת
                טל, ומוריד הטל. בערב...
              </p>
            </div>
            <q-separator
              class="q-mx-md"
              vertical
              inset
              style="
                width: 0;
                background-color: transparent;
                border-left: 2px dotted #00000080;
                height: 80px;
              "
            />
            <div class="row no-wrap q-pt-xs" style="flex-basis: 33.3%">
              <q-icon
                name="book"
                size="md"
                class="text-secondary q-mr-md"
              ></q-icon>
              <p class="text-subtitle2" style="color: #851220">
                תפילת טל, ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...תפילת
                טל, ומוריד הטל. בערב...
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <div class="row no-wrap">
        <div class="column q-mx-xl col-3" style="padding-block-start: 36px">
          <div class="row items-center">
            <q-icon name="dark_mode" size="sm" color="primary" />
            <div class="text-h6 text-weight-bold q-ml-xs">
              סוף זמן ברכת הלבנה
            </div>
          </div>
          <div>ליל שלישי</div>
          <p>
            טקסט טקסט טקסט טקסט טקסט טקסט...טקסט טקסט טקסט טקסט טקסט טקסט...טקסט
            טקסט טקסט טקסט טקסט טקסט...טקסט טקסט טקסט טקסט טקסט טקסט...
          </p>
          <q-separator
            style="
              height: 0;
              background-color: transparent;
              border-bottom: 2px dotted #000000;
            "
          />
          <div class="row items-center justify-between q-py-sm">
            <div class="text-h6 text-weight-bold" color="accent">
              לימודי היום
            </div>
            <q-icon name="expand_more" size="sm" color="black" />
          </div>
          <q-separator
            style="
              height: 0;
              background-color: transparent;
              border-bottom: 2px dotted #000000;
            "
          />
          <div class="text-weight-bold q-py-sm" style="color: #390713">
            דף היומי בבלי
            <span class="text-subtitle2 text-weight-regular q-ml-xs"
              >מסכת ב"מ דף לד</span
            >
          </div>
          <q-separator
            style="
              height: 0;
              background-color: transparent;
              border-bottom: 2px dotted #d0d0d0;
            "
          />
          <div class="text-weight-bold q-py-sm" style="color: #390713">
            דף היומי בבלי
            <span class="text-subtitle2 text-weight-regular q-ml-xs"
              >מסכת ב"מ דף לד</span
            >
          </div>
          <q-separator
            style="
              height: 0;
              background-color: transparent;
              border-bottom: 2px dotted #d0d0d0;
            "
          />
          <div class="text-weight-bold q-py-sm" style="color: #390713">
            דף היומי בבלי
            <span class="text-subtitle2 text-weight-regular q-ml-xs"
              >מסכת ב"מ דף לד</span
            >
          </div>
          <q-separator
            style="
              height: 0;
              background-color: transparent;
              border-bottom: 2px dotted #d0d0d0;
            "
          />
          <div class="text-weight-bold q-py-sm" style="color: #390713">
            דף היומי בבלי
            <span class="text-subtitle2 text-weight-regular q-ml-xs"
              >מסכת ב"מ דף לד</span
            >
          </div>
          <q-separator
            style="
              height: 0;
              background-color: transparent;
              border-bottom: 2px dotted #d0d0d0;
            "
          />
        </div>
        <q-card
          class="col-5"
          style="
            background-color: #f7f7f7;
            margin-block-start: 10px;
            border-radius: 16px;
            box-shadow: none;
          "
        >
          <q-card-section class="q-px-lg" style="padding-block: 24px">
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">הנץ החמה הנראה</span>
              <span class="text-weight-light q-px-sm">הנראה בניכוי 4000</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm">0:00:00</span>
              <div class="row col-3 justify-evenly items-center">
                <q-icon name="help_outline" size="sm" style="color: #851220" />
                <q-icon size="sm" />
                <q-icon name="push_pin" size="sm" style="color: #2274a5" />
                <q-icon name="notifications" size="sm" style="color: #2274a5" />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3 justify-evenly items-center">
                <q-icon name="help_outline" size="sm" style="color: #851220" />
                <q-icon
                  name="add_circle_outline"
                  size="sm"
                  style="color: #2274a5"
                />
                <q-icon name="push_pin" size="sm" style="color: #c6c6c6" />
                <q-icon name="notifications" size="sm" style="color: #c6c6c6" />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <q-separator
              class="q-my-md"
              style="
                height: 0;
                width: 98%;
                background-color: transparent;
                border-bottom: 2px dotted #000000;
              "
            />
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן תפילה</span>
              <span class="text-weight-light q-px-sm">גר"א</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">הנץ החמה הנראה</span>
              <span class="text-weight-light q-px-sm">הנראה בניכוי 2000</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">גר"א</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן תפילה</span>
              <span class="text-weight-light q-px-sm">גר"א</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">הנץ החמה הנראה</span>
              <span class="text-weight-light q-px-sm">הנראה בניכוי 2000</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">גר"א</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <q-separator
              class="q-my-md"
              style="
                height: 0;
                width: 98%;
                background-color: transparent;
                border-bottom: 2px dotted #000000;
              "
            />
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן תפילה</span>
              <span class="text-weight-light q-px-sm">גר"א</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">הנץ החמה הנראה</span>
              <span class="text-weight-light q-px-sm">הנראה בניכוי 2000</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן ק"ש</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
            <div class="text-primary row no-wrap items-center">
              <span class="text-h6">סוף זמן תפילה</span>
              <span class="text-weight-light q-px-sm">מג"א 90 במע'</span>
              <q-space
                class="q-pt-sm col-grow"
                style="border-bottom: 2px dotted #d5d6b3"
              />
              <span class="text-h6 text-weight-bold q-pl-sm col-auto"
                >0:00:00</span
              >
              <div class="row col-3">
                <q-icon />
                <q-icon />
                <q-icon />
                <q-icon />
              </div>
            </div>
          </q-card-section>
        </q-card>
        <div class="row wrap content-start q-mr-lg q-ml-sm">
          <q-card
            style="
              margin-block-start: 15px;
              border-radius: 16px;
              box-shadow: none;
              border: 1px solid #851220;
              width: 100%;
              height: fit-content;
            "
          >
            <q-card-section class="q-py-sm">
              <div class="row justify-between items-center">
                <span class="text-h6 text-weight-bold" style="color: #390713">
                  זמני השבת הקרובה
                </span>
                <span class="text-caption" style="color: #851220">
                  פרשת אף בית גימל דלת
                </span>
              </div>
              <q-separator
                style="
                  height: 0;
                  background-color: transparent;
                  border-bottom: 2px dotted #696b3290;
                  margin-block-start: 4px;
                "
              />
              <div class="row justify-between items-center text-secondary">
                <div class="row items-center">
                  <q-icon name="cake" size="sm" color="secondary" />
                  <div class="column q-ml-sm">
                    <span class="text-weight-bold" style="color: #390713">
                      כניסת שבת
                    </span>
                    <span
                      class="text-caption text-weight-light"
                      style="color: #851220"
                    >
                      הנראה בניכוי 4000
                    </span>
                  </div>
                </div>
                <div class="text-h6 text-weight-bold q-pt-sm">0:00:00</div>
              </div>
              <q-separator
                style="
                  height: 0;
                  background-color: transparent;
                  border-bottom: 2px dotted #696b3290;
                  margin-block-start: 4px;
                "
              />
              <div class="row justify-between items-center text-secondary">
                <div class="row items-center">
                  <q-icon name="sunny" size="sm" color="secondary" />
                  <div class="column q-ml-sm">
                    <span class="text-weight-bold" style="color: #390713">
                      יציאת שבת
                    </span>
                    <span
                      class="text-caption text-weight-light"
                      style="color: #851220"
                    >
                      מג"א 90 במע'
                    </span>
                  </div>
                </div>
                <div class="text-h6 text-weight-bold q-pt-sm">0:00:00</div>
              </div>
            </q-card-section>
          </q-card>
          <q-card
            class="text-white"
            style="
              background-color: #851220;
              margin-block-start: 15px;
              border-radius: 16px;
              box-shadow: none;
              width: 100%;
            "
          >
            <q-card-section class="q-px-lg q-py-sm">
              <div class="row justify-between items-center">
                <div class="text-h4 text-weight-bold">זמני השבת</div>
                <div class="text-subtitle2">ייצוא הזמנים</div>
              </div>
              <div class="text-weight-light" style="font-size: 22px">
                פרשת אף בית גימל דלת
              </div>
              <q-separator
                style="
                  height: 0;
                  background-color: transparent;
                  border-bottom: 2px dotted #fff;
                  margin-block-start: 4px;
                "
              />
              <div class="row justify-between items-center">
                <div class="row items-center">
                  <q-icon name="cake" size="sm" />
                  <div class="column q-ml-sm">
                    <span class="text-weight-bold"> כניסת שבת </span>
                    <span class="text-caption text-weight-light">
                      הנראה בניכוי 4000
                    </span>
                  </div>
                </div>
                <div class="text-h6 text-weight-bold q-pt-sm">0:00:00</div>
              </div>
              <q-separator
                style="
                  height: 0;
                  background-color: transparent;
                  border-bottom: 2px dotted #fff;
                  margin-block-start: 4px;
                "
              />
              <div class="row justify-between items-center">
                <div class="row items-center">
                  <q-icon name="sunny" size="sm" />
                  <div class="column q-ml-sm">
                    <span class="text-weight-bold"> יציאת שבת </span>
                    <span class="text-caption text-weight-light">
                      מג"א 90 במע'
                    </span>
                  </div>
                </div>
                <div class="text-h6 text-weight-bold q-pt-sm">0:00:00</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style></style>
