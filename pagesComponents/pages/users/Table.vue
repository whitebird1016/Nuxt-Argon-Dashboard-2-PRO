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
                'ps-2': index > 0 && index <= 2,
                'text-center': index > 2,
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
                <ArgonAvatar
                  :image="row.image"
                  class="me-3"
                  size="sm"
                  :alt="`${row.name} avatar`"
                  border-radius="lg"
                />
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ row.name }}</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm text-secondary mb-0">{{ row.function }}</p>
            </td>
            <td>
              <span class="badge badge-dot me-4">
                <template v-if="row.status === 'Positive'">
                  <i class="bg-info"></i>
                </template>
                <template v-if="row.status === 'Neutral'">
                  <i class="bg-dark"></i>
                </template>
                <template v-else-if="row.status === 'Negative'">
                  <i class="bg-danger"></i>
                </template>
                <span class="text-dark text-xs">{{ row.status }}</span>
              </span>
            </td>
            <td class="align-middle text-center text-sm">
              <p class="text-secondary mb-0 text-sm">{{ row.email }}</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-sm">{{ row.employed }}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-sm">{{ row.id }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import img1 from "@/assets/img/team-2.jpg";
import img2 from "@/assets/img/team-3.jpg";
import img3 from "@/assets/img/team-4.jpg";
import img6 from "@/assets/img/team-1.jpg";

const header = ["Name", "Function", "Review", "Email", "Employed", "ID"];
const rows = [
  {
    id: 43431,
    image: img1,
    name: "John Michael",
    email: "john@user.com",
    function: "Manager",
    status: "Positive",
    employed: "23/04/18",
  },
  {
    id: 93021,
    image: img2,
    name: "Alexa Liras",
    email: "alexa@user.com",
    function: "Programator",
    status: "Positive",
    employed: "11/01/19",
  },
  {
    id: 10392,
    image: img3,
    name: "Laurent Perrier",
    email: "laurent@user.com",
    function: "Executive",
    status: "Neutral",
    employed: "19/09/17",
  },
  {
    id: 34002,
    image: img6,
    name: "Michael Levi",
    email: "michael@user.com",
    function: "Backend Developer",
    status: "Positive",
    employed: "24/12/18",
  },
  {
    id: 91879,
    image: img2,
    name: "Richard Gran",
    email: "richard@user.com",
    function: "Manager",
    status: "Negative",
    employed: "04/10/21",
  },
  {
    id: 23042,
    image: img1,
    name: "Miriam Eric",
    email: "miriam@user.com",
    function: "Programator",
    status: "Positive",
    employed: "04/10/21",
  },
];
</script>
