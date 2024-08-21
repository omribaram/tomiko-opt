<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <div class="row no-wrap">
        <q-toolbar class="q-mt-md">
          <img src="~assets/img/logo.png" class="q-mx-lg" />
          <q-tabs
            class="text-accent"
            v-for="tab in tabList"
            :key="tab.label"
            v-model="currTab"
            indicator-color="transparent"
            active-class="active-tab"
          >
            <q-route-tab
              :name="tab.label"
              :label="tab.label"
              :ripple="false"
              class="q-mx-xs"
              content-class="toolbar-tab"
              :to="tab.to"
              exact
            />
          </q-tabs>
          <q-input
            rounded
            outlined
            dense
            borderless
            hide-bottom-space
            v-model="searchText"
            type="search"
            bg-color="transparent"
            input-class="text-accent"
            input-style="min-width: 150px"
            class="q-px-lg col-grow"
            placeholder="חיפוש זמן או לוח"
          >
            <template v-slot:append>
              <q-icon v-if="searchText === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="searchText = ''"
              />
            </template>
          </q-input>
          <q-select
            rounded
            outlined
            hide-dropdown-icon
            v-model="currLang"
            :options="options"
            option-label="label"
            option-value="value"
            dense
            label-color="secondary"
            color="secondary"
            style="width: 90px"
          />
          <q-separator
            vertical
            inset
            size="2px"
            spaced="24px"
            style="background: #d396a170; height: 60%"
          />
          <div class="text-secondary">
            <q-icon name="help_outline" size="sm" color="secondary" />
            עזרה
          </div>
          <q-separator
            vertical
            inset
            spaced="24px"
            size="2px"
            style="background: #9a9c6670; height: 60%"
          />
          <q-icon name="settings" color="secondary" size="sm" />
          <q-separator
            vertical
            inset
            spaced="24px"
            size="2px"
            style="background: #9a9c6670; height: 60%"
          />
          <div class="text-secondary">
            שלום,
            <span style="font-weight: bolder; color: #672724"
              >רבינוביצקינוביץ'</span
            >
            <q-icon
              name="person_outline"
              size="md"
              color="secondary"
              left
              right
            />
          </div>
        </q-toolbar>
      </div>
      <q-breadcrumbs
        separator=">"
        style="
          color: #9a9c66;
          margin-inline-start: 36px;
          margin-block-start: 5px;
        "
      >
        <q-breadcrumbs-el label="בית" />
        <q-breadcrumbs-el label="מוצרים למוסדות" />
        <q-breadcrumbs-el label="לוחות דיגיטליים" />
      </q-breadcrumbs>
    </q-header>

    <q-drawer
      v-model="isDrawerOpen"
      overlay
      side="left"
      width="250"
      class="q-pr-lg q-pl-md q-pt-md"
      style="color: #390713"
    >
      <div class="text-h6 text-weight-bold q-mb-sm">לוחות הזמנים</div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="row justify-between q-py-xs">
        <div class="row">
          <q-icon name="star_outline" size="sm" color="secondary" />
          <div class="text-weight-bold text-secondary q-pl-xs">עתים לבינה</div>
        </div>
        <q-icon name="expand_more" size="sm" color="black" left />
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="text-subtitle2 q-py-sm q-pl-abit-more">הלוח הראשי</div>
      <div class="text-subtitle2 q-py-sm q-pl-abit-more">מידע חודשי ושנתי</div>
      <div class="text-subtitle2 text-weight-bold q-py-sm q-pl-abit-more">
        הסבר על הזמנים
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="row justify-between q-py-xs">
        <div class="row">
          <q-icon name="calendar_month" size="sm" color="secondary" />
          <div class="text-weight-bold text-secondary q-pl-xs">
            לוחות נוספים
          </div>
        </div>
        <q-icon name="chevron_left" size="sm" color="black" left />
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="text-subtitle2 q-py-sm q-pl-abit-more">לנשים</div>
      <div class="text-subtitle2 q-py-sm q-pl-abit-more">לוח נוסף</div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="row justify-between q-py-xs">
        <div class="row">
          <q-icon name="event" size="sm" color="secondary" />
          <div class="text-weight-bold text-secondary q-pl-xs">
            לוחות מפורסמים
          </div>
        </div>
        <q-icon name="chevron_left" size="sm" color="black" left />
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="row justify-between q-py-xs">
        <div class="row">
          <q-icon name="description" size="sm" color="secondary" />
          <div class="text-weight-bold text-secondary q-pl-xs">מאמרים</div>
        </div>
        <q-icon name="chevron_left" size="sm" color="black" left />
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="row justify-between q-py-xs">
        <div class="row">
          <q-icon name="person" size="sm" color="secondary" />
          <div class="text-weight-bold text-secondary q-pl-xs">הלוחות שלי</div>
        </div>
        <q-icon name="chevron_left" size="sm" color="black" left />
      </div>
      <q-separator
        style="
          height: 0;
          background-color: transparent;
          border-bottom: 2px dotted #000000;
        "
      />
      <div class="row justify-end q-pt-lg q-pb-md">
        <q-btn outline rounded label="יצירת לוח אישי" style="color: #368fc5" />
      </div>
    </q-drawer>
    <q-page-container class="row justify-end">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      tabList: [
        { label: "לוחות הזמנים", to: "timetable" },
        { label: "הלוחות שלי", to: "timetable" },
        { label: "לוחות להורדה", to: "timetable" },
        { label: "מוסדות וארגונים", to: "timetable" },
      ],
      options: [
        { label: "עברית", value: "he" },
        { label: "English", value: "en" },
      ],
      currTab: "",
      currLang: { label: "עברית", value: "he" },
      isDrawerOpen: true,
      searchText: "",
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
};
</script>

<style lang="scss">
.q-layout,
.q-header {
  background-color: $main-bg;
}

.q-focus-helper {
  visibility: hidden;
}

.q-select {
  .q-field__native {
    justify-content: center;
    color: #a4283f;
  }

  .q-field__control:before,
  .q-field__control:after,
  &.q-field--highlighted .q-field__control:after {
    border: 1px solid $secondary;
  }
}

.q-drawer {
  margin-block-start: 10px;
  height: 520px;
  border-radius: 0 30px 30px 0;
  background-color: #ebebe3;
  border: 1px solid #d5d6b3;
  filter: drop-shadow(0 0px 5px rgb(0 0 0 / 20%));
}

.q-pl-abit-more {
  padding-inline-start: 28px;
}

.active-tab .q-tab__label {
  font-weight: 700;
}

.toolbar-tab {
  min-width: 100px;
}
</style>
