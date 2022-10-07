<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
    
    <template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>