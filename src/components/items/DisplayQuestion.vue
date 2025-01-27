<script setup lang="ts">
import type { Choice } from '@/models/Choice';
import { QuestionType, type Question } from '@/models/Question';

const { question, choices, nbr, preview } = defineProps<{question?: Question, choices?: Choice[], nbr?: number, preview: boolean}>();

</script>

<template>
    <div class="display-question" v-if="question"
        :class="{
            'question-type-text': [QuestionType.Text, QuestionType.Number].includes(question.type), 
            'question-type-choices': [QuestionType.SingleChoice, QuestionType.MultipleChoice].includes(question.type),
        }">
        <div class="question-wrapper">
            <div class="question-text">{{ nbr ?? 1 }}. {{ question.text }}</div>
            <div class="question-pts">({{ question.max_points }} pts)</div>
        </div>

        <div class="choices-wrapper">
            <template v-if="choices">
                <template v-if="question.type === QuestionType.MultipleChoice">
                    <template v-for="choice in choices" :key="choice.id">
                        <div class="choice-input">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" :name="question.id" :id="'choice-' + choice.id" :value="choice.text" />
                                <label class="form-check-label" :for="'choice-' + choice.id">{{ choice.text }}</label>
                            </div>
                        </div>
                        <div class="choice-pts" v-if="preview">
                            ({{ choice.points }} pts)
                            <template v-if="choice.is_correct"><i class="bi bi-check2"></i></template>
                            <template v-else><i class="bi bi-x-lg"></i></template>
                        </div>
                    </template>
                </template>
        
                <template v-else-if="question.type === QuestionType.SingleChoice">
                    <template v-for="choice in choices" :key="choice.id">
                        <div class="choice-input">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" :name="question.id" :id="'choice-' + choice.id" :value="choice.text" />
                                <label class="form-check-label" :for="'choice-' + choice.id">{{ choice.text }}</label>
                            </div>
                        </div>
                        <div class="choice-pts" v-if="preview">
                            ({{ choice.points }} pts)
                            <template v-if="choice.is_correct"><i class="bi bi-check2"></i></template>
                            <template v-else><i class="bi bi-x-lg"></i></template>
                        </div>
                    </template>
                </template>
                
                <template v-else-if="question.type === QuestionType.Text">
                    <div class="choice-input">
                        <input class="form-control" type="text" :name="question.id" />
                    </div>
                    <div class="choice-pts-wrapper" v-if="preview">
                        <template v-for="choice in choices" :key="choice.id">
                            <div class="choice-pts">
                                {{ choice.text }} ({{ choice.points }} pts)
                                <template v-if="choice.is_correct"><i class="bi bi-check2"></i></template>
                                <template v-else><i class="bi bi-x-lg"></i></template>
                            </div>
                        </template>
                    </div>
                </template>
        
                <template v-else-if="question.type === QuestionType.Number">
                    <div class="choice-input">
                        <input class="form-control" type="number" :name="question.id" />
                    </div>
                    <div class="choice-pts-wrapper" v-if="preview">
                        <template v-for="choice in choices" :key="choice.id">
                            <div class="choice-pts">
                                {{ choice.text }} ({{ choice.points }} pts)
                                <template v-if="choice.is_correct"><i class="bi bi-check2"></i></template>
                                <template v-else><i class="bi bi-x-lg"></i></template>
                            </div>
                        </template>
                    </div>
                </template>
            </template>
        </div>

    </div>
</template>
