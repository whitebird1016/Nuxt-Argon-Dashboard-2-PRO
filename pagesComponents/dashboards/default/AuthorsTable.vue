<template>
  <div class="card">
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th
              v-for="(heading, index) in header"
              :key="heading"
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              :class="{
                'text-center': index !== 1 && index > 1,
                'ps-2': index === 1,
              }"
            >
              {{ heading }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <ArgonAvatar
                    :image="row.image"
                    :alt="row.name"
                    border-radius="lg"
                    size="sm"
                    class="me-3"
                  />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">{{ row.name }}</h6>
                  <p class="text-xs text-secondary mb-0">
                    {{ row.email }}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">
                {{ row.function.position }}
              </p>
              <p class="text-xs text-secondary mb-0">
                {{ row.function.department }}
              </p>
            </td>
            <td class="align-middle text-center text-sm">
              <span
                class="badge badge-sm"
                :class="
                  row.status === 'Online' ? 'badge-success' : 'badge-secondary'
                "
                >{{ row.status }}</span
              >
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">
                {{ row.employed }}
              </span>
            </td>
            <td class="align-middle">
              <a
                :href="row.action"
                class="text-secondary font-weight-bold text-xs"
                data-toggle="tooltip"
                data-original-title="Edit user"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const header = ["Author", "Function", "Technology", "Employed", " "];
const rows = [
  {
    id: 1,
    image:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    function: { position: "Manager", department: "Organization" },
    status: "Online",
    employed: "23/04/18",
    action: "#",
  },
  {
    id: 2,
    image:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: { position: "Programator", department: "Developer" },
    status: "Offline",
    employed: "11/01/19",
    action: "#",
  },
  {
    id: 3,
    image:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    function: { position: "Executive", department: "Projects" },
    status: "Online",
    employed: "19/09/17",
    action: "#",
  },
  {
    id: 4,
    image:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    function: { position: "Programator", department: "Developer" },
    status: "Online",
    employed: "24/12/18",
    action: "#",
  },
  {
    id: 5,
    image:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    function: { position: "Manager", department: "Executive" },
    status: "Offline",
    employed: "04/10/21",
    action: "#",
  },
];
</script>
