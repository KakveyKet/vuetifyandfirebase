<template>
  <div style="padding: 30px">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Age</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <v-chip v-if="item.status === true" color="green" variant="flat">
              Active
            </v-chip>
            <v-chip v-else color="red" variant="flat"> Inactive </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script>
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const data = ref([]);

    const fetchData = async () => {
      try {
        await getCollectionQuery("tasks", [], (item) => {
          data.value = item;
        });
        console.log("Fetched Data:", data.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { data };
  },
};
</script>

<style lang="scss" scoped>
/* Add any scoped styles here */
</style>
